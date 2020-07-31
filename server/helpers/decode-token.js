function decodeToken(data){
    const base64Url = data.request.headers.authorization.split(' ')[1].split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const buff = new Buffer(base64, 'base64');
    const payloadinit = buff.toString('ascii');
    const payload = JSON.parse(payloadinit);

    return payload
}

module.exports = decodeToken
