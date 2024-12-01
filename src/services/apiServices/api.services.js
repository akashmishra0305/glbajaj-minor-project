
const ALLOWED_METHODS = ["GET" , "POST" , "PUT" , "DELETE"]

export class HelperService {
    $baseurl = window.location.url
    $loading = false

    constructor(method , url){ }

    fetch(method , url , payload){
        if(method.toUpperCase() === "GET"){
            return this.get()
        } else if(method.toUpperCase() === "GET"){
            return this.create()
        } else if(method.toUpperCase() === "GET"){
            this.update()
        } else if(method.toUpperCase() === "GET"){
            this.delete()
        }   
    }

    async get(){

    }

    async update() {

    }

    async delete(){

    }

    async create(){

    }

}