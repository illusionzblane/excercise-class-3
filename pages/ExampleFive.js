import  {useEffect, useState} from 'react'
import Header from '@/components/Header';
import Footer from '@/components/Footer'

export default function ExampleFive() {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=> {
            setCount(count +1)
        },1000)

        return ()=>clearInterval(interval);
    },[count])

    return (
        <>
        <Header/>
        <main>
        <h1> Header 5</h1>
        <div>{count}</div>
        </main>
        <Footer/>
        </>
    )
}