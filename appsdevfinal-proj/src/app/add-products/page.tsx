export default function addProducts() {
    return (
        <div>
            <h1 className="text-lg mb-3 font-bold">ADD PRODUCT</h1>
            <form>

                <input
                    required
                    name="namne"
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
                    <button type="submit" className="btn btnn-primary btn-block">Add Products</button>
            </form>
        </div>
    )
}