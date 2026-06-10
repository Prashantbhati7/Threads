const queries = {
    hello:()=>"hello world"
}

const mutations = {
    createUser:async(_:any,{firstName,lastName,email,password}:{firstName:string,lastName:string,email:string,password:string})=>{
        return "user created successfully"
    }
}

export const resolvers = {queries,mutations}