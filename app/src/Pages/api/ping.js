function ping(req, resp){
    const data = new Date()
    resp.json({
        date: data.toGMTSring()
    });
}
export default ping;