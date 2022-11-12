function tempo(req, resp){
    const date = new Date()
    resp.json({
        date: date.toGMTString()
    })
} 
export default tempo