import React , { useState , useEffect , useRef } from 'react'
import './Island.scss'

import ContentModal from '../../components/ContentModal'
import NavMobile from '../../components/NavMobile'
import Social from '../../components/Social'
import ModelViewer from '../../components/ModelViewer'

export default function Island() {
    const [status,setStatus] = useState("")
    const [name,setName] = useState("")

    const [statusNavMobile,setStatusNavMobile] = useState("active")

    const model = useRef(null);
    const navMobile = useRef(null);

    const handleShowModal = (nameDataset) => {
        setName(nameDataset)
        setStatusNavMobile(" ")
        setTimeout(() => {
            setStatus("active")
        },500)
    }

    useEffect(() => {

        // handle loading
        const onProgress = (event) => {
            const progressBar = event.target.querySelector('.progress-bar');
            const updatingBar = event.target.querySelector('.update-bar');

            updatingBar.style.width = `${event.detail.totalProgress * 100}%`;

            if (event.detail.totalProgress === 1) {
                progressBar.classList.add('hide');
                modelViewer.querySelectorAll('button').forEach((hotspot) => {
                    hotspot.style.opacity = 1;
                });
            } 
            else {
                progressBar.classList.remove('hide');

                modelViewer.querySelectorAll('button').forEach((hotspot) => {
                    hotspot.style.opacity = 0;
                });

                if (event.detail.totalProgress === 0) {
                    event.target.querySelector('.center-pre-prompt').classList.add('hide');
                }
            }
        };

        document.querySelector('model-viewer').addEventListener('progress', onProgress);

        const modelViewer =  model.current;

        // init camera animation
        const orbitCycle = [
            '-180deg -180deg 100%',
            modelViewer.cameraOrbit
        ];

        const animationCamera = setInterval(() => {
            const currentOrbitIndex = orbitCycle.indexOf(modelViewer.cameraOrbit);
            modelViewer.cameraOrbit =
                orbitCycle[(currentOrbitIndex + 1) % orbitCycle.length];

            if(currentOrbitIndex===0){
                clearInterval(animationCamera);
            }
        }, 1500);
        
        // handle onclick
        const annotationClicked = (annotation) => {
            let dataset = annotation.dataset;
            modelViewer.cameraTarget = dataset.target;
            modelViewer.cameraOrbit = dataset.orbit;
            modelViewer.fieldOfView = '45deg';

            handleShowModal(dataset.name)
        }

        modelViewer.querySelectorAll('.Hotspot').forEach((hotspot) => {
            hotspot.onclick = () => {
                annotationClicked(hotspot)
            };
        });

        // handle nav mobile
        navMobile?.current?.querySelectorAll('.nav-mobile-item').forEach((hotspot) => {
            hotspot.onclick = () => {
                annotationClicked(hotspot)
            };
        });

        const handleBack = () => {
            modelViewer.cameraTarget = "0 0 0";
            modelViewer.cameraOrbit = "0 0 0";
            modelViewer.fieldOfView = '45deg';

            setStatus("")
            setStatusNavMobile("active")
        }

        const btnBack = document.querySelector(".btn-back");
        btnBack.onclick = () => {
            handleBack()
        }

    },[])

    return (
        <div className="island">

            <ModelViewer model={model}/>
            
            <ContentModal status={status} name={name}/>

            <NavMobile statusNavMobile={statusNavMobile} navMobile={navMobile}/>

            <Social status={statusNavMobile}/>

        </div>
    )
}
