
import fs from "fs";
import path from "path";
import { ReadableOptions } from "stream"


function streamFile(path: string, options?: ReadableOptions): ReadableStream<Uint8Array> {
    const downloadStream = fs.createReadStream(path, options);

    return new ReadableStream({
        start(controller) {
            downloadStream.on("data", (chunk: Buffer) => controller.enqueue(new Uint8Array(chunk)));
            downloadStream.on("end", () => controller.close());
            downloadStream.on("error", (error: NodeJS.ErrnoException) => controller.error(error));
        },
        cancel() {
            downloadStream.destroy();
        },
    });
}

export async function GET(request:Request) {
   // return NextResponse.json({message:"try again"})
   const filePath = path.join(process.cwd(), "public/CV.pdf")
   const stat = await fs.statSync(filePath);
   const data: ReadableStream<Uint8Array> = streamFile(filePath);

   return new Response(data,
    {status:200,
        headers:{
            "content-length": stat.size+'',
            "content-disposition": `attachment; filename="kudayapaulCV.pdf"`,
            "content-type":"application/pdf"
        },
        
    }

   )
}