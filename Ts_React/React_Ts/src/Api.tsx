import { useEffect, useState } from "react"

const BaseUrl = "http://localhost/api/buku"

const Button = ({ children }: any) => (
    <button>
        {children}
    </button>
)

const Card = ({children}: any) => {
    return(
        <>
            {children}
        </>
    )
}

interface Icard {
    id: number,
    pengarang: string
    judul: string,
    tanggal_publikasi: number,
}


const Api = () => {
const [dataApi, setDataApi] = useState<{ data: Icard[] }>({
    data: []
})

    useEffect (() => {
        const getData = async() => {
            try {
                const response = await fetch(BaseUrl)

                if(!response.ok) {
                    throw new Error(`Error : ${response.status}`)
                }

                const result = await response.json()
                setDataApi(result)
            }
            catch {
                console.log("gagal")
            }
        }
    getData()
    },[])

    const cards: Icard[] = dataApi.data

    return (
        <>
            <Button>
                <h2>ini dari komponen button</h2>
            </Button>

            {cards.map((card)=>{
                return(
                    <Card>
                        <p>Pengarang : {card.pengarang}</p>
                        <p>Judul : {card.judul}</p>
                        <p>Tanggal Publikasi : {card.tanggal_publikasi}</p>
                    </Card>
                )
            })}
        </>
    )
}

export default Api
