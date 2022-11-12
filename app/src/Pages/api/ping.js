function ping(request, response){
    const data = new Date()
    response.json({
        date: data.toGMTSring()
    });
}
export default ping;