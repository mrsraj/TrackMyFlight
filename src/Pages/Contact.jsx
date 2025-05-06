function Contact() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <form className="space-y-4">
                <div>
                    <label className="block text-gray-700">Name</label>
                    <input type="text" className="w-full border border-gray-300 p-2 rounded" />
                </div>
                <div>
                    <label className="block text-gray-700">Email</label>
                    <input type="email" className="w-full border border-gray-300 p-2 rounded" />
                </div>
                <div>
                    <label className="block text-gray-700">Message</label>
                    <textarea className="w-full border border-gray-300 p-2 rounded"></textarea>
                </div>
                <button type="submit" className="bg-gray-800 text-white px-4 py-2 rounded">Send Message</button>
            </form>
        </div>
    );
}

export default Contact;
