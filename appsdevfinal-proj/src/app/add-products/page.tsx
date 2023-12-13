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
            </form>
        </div>
    )
}