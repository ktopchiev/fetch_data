const apiRequest = async (url='') => {
    let itemsList = null;
    try {
        const response = await fetch(url);
        if (!response.ok) throw Error('Cannot receive data');
        itemsList = await response.json();
    } catch (err) {
        console.log(err.message);
    } finally {
        return itemsList;
    }
}

export default apiRequest;