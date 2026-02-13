import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Demo from '@/model/DemoSchema';

export async function DELETE(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await dbConnect();
        const { id } = await params;
        const deletedDemo = await Demo.findByIdAndDelete(id);

        if (!deletedDemo) {
            return NextResponse.json({ success: false, error: 'Demo Request not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true, data: {} });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}
