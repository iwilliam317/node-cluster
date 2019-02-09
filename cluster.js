const cluster = require('cluster')
const cpus = require('os').cpus()

if(cluster.isMaster){
    cpus.forEach(cpu => {
        cluster.fork()
    })
}
else{
    require('./app')
}