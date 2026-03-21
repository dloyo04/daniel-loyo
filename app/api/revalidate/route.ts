import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    // Verify the secret token
    const secret = request.nextUrl.searchParams.get('secret');

    if (secret !== process.env.REVALIDATE_SECRET) {
        return NextResponse.json(
            { message: 'Invalid token' },
            { status: 401 }
        );
    }

    try {
        // Revalidate the home page
        revalidatePath('/');

        return NextResponse.json(
            {
                revalidated: true,
                message: 'Homepage revalidated successfully',
                timestamp: new Date().toISOString()
            },
            { status: 200 }
        );
    } catch (err) {
        return NextResponse.json(
            {
                message: 'Error revalidating',
                error: err instanceof Error ? err.message : 'Unknown error'
            },
            { status: 500 }
        );
    }
}
