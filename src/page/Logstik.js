import '../App.css'
import Logistik from '../component/Logistik/Logistik'
import Sdbar from '../component/Sidebar/sdbar'

function Logstik (){

    return(
        
        <>

            <div className='App-bgpage'>
                <div>
                    <Sdbar/>
                </div>

                <div>
                    <section className={`-mt-1`}>
                    
                    <Logistik/>

                </section>
                </div>
            </div>

        </>
    )
}

export default Logstik