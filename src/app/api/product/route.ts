import { NextRequest, NextResponse } from "next/server";

const data = [
    {
        id: 1,
        name: 'Sepatu Olahraga',
        price: 120000
    },
    {
        id: 2,
        name: 'Sepatu Casual',
        price: 320000
    },
] 

export async function GET(request: NextRequest){
    const {searchParams} = new URL(request.url)
    const id = searchParams.get('id')
    if(id){
        const detailProduct = data.find((item) => item.id === Number(id))
        if(detailProduct){
        return NextResponse.json({status:200, message: "success", detailProduct})
        }
        return NextResponse.json({status:404, message: "Product not found"})
        
    } 
    
    return NextResponse.json({status:200, message: "success", data})
}