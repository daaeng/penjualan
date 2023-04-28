import '../App.css'
import Logistik from '../component/Logistik/Logistik'
import Sdbar from '../component/Sidebar/sdbar'

function Logstik (){

    return(
        
        <>

            <div>
                <div>
                    <Sdbar/>
                </div>

                <div>
                    <section className={`bg-gray-50 -mt-1`}>
                    
                    <Logistik/>

                </section>
                </div>
            </div>

        </>
    )
}

export default Logstik