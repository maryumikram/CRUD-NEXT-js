import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from 'next/server';

export async function PUT(request, { params }) {
    try {
        const { id } = params;
        const { newTitle: title, newDescription: description } = await request.json();
        await connectMongoDB();
        await Topic.findByIdAndUpdate(id, { title, description });
        return NextResponse.json({ message: "Topic Updated" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "An error occurred" });
    }
}

export async function GET(request, { params }) {
    try {
        const { id } = params;
        await connectMongoDB();
        const topic_id = await Topic.findOne({ _id: id });
        return NextResponse.json({ topic_id }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "An error occurred" });
    }
}
