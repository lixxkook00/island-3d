import React , { useState , useEffect , useRef } from 'react'
import './Island.scss'

import ContentModal from '../../components/ContentModal'
import NavMobile from '../../components/NavMobile'

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
            <model-viewer 
                ref={model}
                id="hotspot-camera-view-demo"  
                bounds="tight" 
                enable-pan src='./images/island_2.glb'
                ar ar-modes="webxr scene-viewer quick-look"
                camera-controls
                cameraTarget = "0 0 0"
                touch-action="none"
                interaction-prompt="none"
                interpolation-decay="200"
                shadow-intensity="0" 
                exposure="0.45" 
                shadow-softness="1" 
                camera-orbit="1.198deg 80.79deg auto" 
                min-camera-orbit="auto auto 100m" 
                min-field-of-view="30deg"
                loading="eager"
                // auto-rotate="true"
            >
                <button 
                    className="Hotspot story" 
                    slot="hotspot-1" 
                    data-name="story"
                    data-position="-15.17371364484508m 13.733440214997351m -0.38319811637248513m" 
                    data-normal="-0.02078116632344306m -0.1802298925512806m 0.9834049669170842m" 
                    data-visibility-attribute="visible"
                    data-target="-15m -7m -80m"
                    >
                    <div className="HotspotAnnotation">
                        <img src="./images/story.png" alt="" />
                    </div>
                </button>

                <button 
                    className="Hotspot gameplay" 
                    slot="hotspot-3"
                    data-name="gameplay" 
                    data-position="0.8963960088420251m 2.1090111828714697m -10.67504054997515m" 
                    data-normal="0m -1.343588610839583e-7m 0.9999999999999911m" 
                    data-visibility-attribute="visible"
                    data-target="0.00m -22.00m -100.00m"
                    >
                    <div className="HotspotAnnotation">
                        <img src="./images/gameplay.png" alt="" />
                    </div>
                </button>

                <button 
                    className="Hotspot roadmap" 
                    slot="hotspot-4" 
                    data-name="roadmap" 
                    data-position="10.691738579399255m 8.596935581875726m -19.161179077009717m" 
                    data-normal="0.084068692003698m -0.6899835441859172m 0.718926396634195m" 
                    data-visibility-attribute="visible"
                    data-target="9m -11m -95m"
                    >
                    <div className="HotspotAnnotation">
                        <img src="./images/roadmap.png" alt="" />
                    </div>
                </button>

                <button 
                    className="Hotspot tokenomic" 
                    slot="hotspot-5" 
                    data-name="tokenomic" 
                    data-position="15.6116381187966m 6.402890192149521m 7.410681504706385m" 
                    data-normal="-0.06744800715356736m 0.9403464876600586m 0.3334655146734123m" 
                    data-visibility-attribute="visible"
                    data-target="15m -18m -84m"
                >
                    <div className="HotspotAnnotation">
                        <img src="./images/tokenomic.png" alt="" />
                    </div>
                </button>

                <button 
                    className="Hotspot about" 
                    slot="hotspot-6" 
                    data-name="about"
                    data-position="17.639094300976467m 6.981488777235602m -4.673789700264038m" 
                    data-normal="0.11157101174070311m 0.9887687838192699m 0.09943943626005725m" 
                    data-visibility-attribute="visible"
                    data-target="16m -16m -93m"
                >
                    <div className="HotspotAnnotation">
                        <img src="./images/about.png" alt="" />
                    </div>
                </button>

                <div className="progress-bar hide" slot="progress-bar">
                    <div className="update-bar"></div>
                </div>

                <button className="btn-back" >
                    <img src="./images/back.png" alt="" />
                </button>
            </model-viewer>
            
            <ContentModal status={status} name={name}/>

            <NavMobile statusNavMobile={statusNavMobile} navMobile={navMobile}/>

        </div>
    )
}
