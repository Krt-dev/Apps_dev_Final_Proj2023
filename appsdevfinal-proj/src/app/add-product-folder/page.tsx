import { prisma } from "@/lib/db/prisma";
import { redirect } from "next/navigation";

export const metadata = {
    title: 'Add Products -Rhukujo',
    description: 'We have got it all for you',
}

async function addProducts(formData: FormData) {
    "use server";

    const name = formData.get("name")?.toString();
    const description = formData.get("description")?.toString();
    const imageUrl = formData.get("imageUrl")?.toString();
    const price = Number(formData.get("price" || 0));

    if (!name || !description || !imageUrl || !price) {
        throw Error("Missing Fields");
    }
    await prisma.product.create({

        data: { name, description, imageUrl, price }
    });

    redirect("/");
}

export default function addProductsPage() {
    return (
        <div>
            <h1 className="text-lg mb-3 font-bold">ADD PRODUCT</h1>
            <form>

                <input
                    required
                    name="name"
                    placeholder="Name"
                    className="mb-3 w-full input input-bordered" />
                <textarea
                    required
                    name="description"
                    placeholder="Description"
                    className="textarea-bordered textarea mb-3 w-full"
                />
                <input
                    required
                    name="imageUrl"
                    placeholder="Image Url"
                    type="url"
                    className="mb-3 w-full input input-bordered"
                />
                <input
                    required
                    name="price"
                    placeholder="Price"
                    type="number"
                    className="mb-3 w-full input input-bordered" />
                <button type="submit" className="btn btn-accent btn-block">Add Products</button>
            </form>
        </div>
    )
}