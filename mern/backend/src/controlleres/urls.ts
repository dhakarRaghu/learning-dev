import { Request, Response, NextFunction } from 'express';
import { Url } from '../models/user';
import { nanoid } from 'nanoid';

// Generate Short URL

export async function GenerateShortUrl(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const shortId = nanoid(8); // Generate a unique short URL ID
        const { url } = req.body;

        if (!url) {
            res.status(400).json({ message: 'URL is required' });
            return;
        }

        // Create a new URL document
        await Url.create({
            short_url: shortId, // Ensure this matches the schema
            redirect_url: url,
            visitHistory: [],
        });

        const fullShortUrl = `${req.protocol}://${req.get('host')}/api/shorturl/${shortId}`;
        res.json({ id: shortId, shortUrl: fullShortUrl, message: 'Short URL generated successfully' });
    } catch (error) {
        next(error); // Pass errors to error-handling middleware
    }
}

// Handle Redirection and Visit Logging
export async function GetVisited(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const { shortId } = req.params;
        const entry = await Url.findOneAndUpdate(
            { short_url: shortId },
            {
                $push: {
                    visitHistory: {
                        timestamp: Date.now(),
                    },
                },
            },
            { new: true }
        );

        if (entry) {
            res.redirect(entry.redirect_url);
            console.log(entry.redirect_url);
        } else {
            res.status(404).json({ message: 'Short URL not found' });
        }
    } catch (error) {
        next(error); // Pass the error to the error-handling middleware
    }
}
