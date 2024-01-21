import { COnnectDB } from "@/lib/config/db.config";
import { UserModel } from "@/lib/models/User.models";
import { NextRequest, NextResponse } from "next/server";

COnnectDB()
export const POST = async(request:NextRequest)=>{
    
    
    try {
        const {name,email,password} = await request.json();
        

        // kya banda exist to nhi hai 

        const existUser = await UserModel.findOne({email});
        if(existUser){
          return   NextResponse.json({error:"User already exist"},{
                    status:400
                }) 
        }


        await UserModel.create({
            name,email,password
        })
 return NextResponse.json({msg:"user register successfully"},{
                    status:201
                }) 


    } catch (error:any) {
               return  NextResponse.json({error:error.message},{
                    status:500
                })
    }
    
}