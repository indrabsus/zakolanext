import CardContent from "@/components/CardContent";

async function getData() {
  const res = await fetch('http://skuliodigital.test/api/kegiatan');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
export default async function Home() {
  const data = await getData();
  console.log(data.data);
  return (

<div className="flex justify-center">
  
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-10 mt-10 mb-20 gap-2">
  {data.data.map((kegiatan: any) => (
    <CardContent key={kegiatan.id_kegiatan} title={kegiatan.judul} description={kegiatan.deskripsi} image={kegiatan.gambar} />
  ))}
   </div>

</div>


  );
}


