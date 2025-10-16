// File: pages/api/contact-webhook.ts

import { NextApiRequest, NextApiResponse } from 'next';

// Webhook URL được tải từ .env.local (chỉ có thể truy cập được trên Server)
const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // 1. Kiểm tra phương thức HTTP
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    // 2. Kiểm tra Webhook URL (bắt buộc phải có)
    if (!DISCORD_WEBHOOK_URL) {
        console.error('❌ SERVER CONFIG ERROR: DISCORD_WEBHOOK_URL is not set in .env.local!');
        return res.status(500).json({ 
            message: 'Contact feature is temporarily unavailable. Please try again later.' 
        }); 
    }

    // 3. Validate input
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'Missing required fields: name, email, or message' });
    }

    // 4. Xây dựng Payload JSON cho Discord
    const payload = {
        username: "Portfolio Contact Bot",
        avatar_url: "https://i.imgur.com/8Qe2tVf.png",
        embeds: [
            {
                title: '🎉 New Contact Form Submission!',
                description: `**Subject:** ${subject || 'No subject'}`,
                color: 6781468, // Mã màu Decimal (#677a1c)
                fields: [
                    { name: "👤 Name", value: name || "N/A", inline: true },
                    { name: "📧 Email", value: email || "N/A", inline: true },
                    { name: "💬 Message", value: message.substring(0, 1024), inline: false },
                ],
                timestamp: new Date().toISOString(),
                footer: { 
                    text: 'Sent from khoale-dev-code Portfolio' 
                }
            }
        ]
    };

    try {
        console.log('📤 Sending message to Discord webhook...');
        
        // 5. Gửi HTTP POST Request đến Webhook URL
        const discordRes = await fetch(DISCORD_WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (discordRes.ok || discordRes.status === 204) {
            console.log('✅ Message sent to Discord successfully!');
            return res.status(200).json({ message: 'Message sent successfully!' });
        } else {
            // Lỗi từ Discord (400, 401, 404,...)
            const discordErrorText = await discordRes.text();
            let errorData;
            
            try {
                errorData = JSON.parse(discordErrorText);
            } catch (e) {
                // Không phải JSON
            }

            // Ghi lỗi chi tiết vào Server Console
            console.error('❌ Discord Webhook Failed:', {
                status: discordRes.status,
                statusText: discordRes.statusText,
                error: errorData || discordErrorText
            });

            // Xử lý lỗi cụ thể
            if (discordRes.status === 401 || (errorData && errorData.code === 50027)) {
                console.error('🔴 CRITICAL: Invalid Discord Webhook Token! Please check your DISCORD_WEBHOOK_URL in .env.local');
                return res.status(500).json({ 
                    message: 'Server configuration error. The notification system is not properly set up. Please contact the site administrator.' 
                });
            }

            if (discordRes.status === 404) {
                console.error('🔴 CRITICAL: Discord Webhook not found! The webhook may have been deleted.');
                return res.status(500).json({ 
                    message: 'Notification system is unavailable. Please try contacting via email directly.' 
                });
            }
            
            // Các lỗi khác
            return res.status(500).json({ 
                message: 'Failed to send notification. Please try again or contact via email.' 
            });
        }
    } catch (error) {
        // Lỗi mạng hoặc hệ thống
        console.error('❌ Network/System Error:', error);
        return res.status(500).json({ 
            message: 'Network error. Please check your connection and try again.' 
        });
    }
}