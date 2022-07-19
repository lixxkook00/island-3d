import React from 'react'
import './Island.scss'

export default function Island() {

    window.addEventListener('load', (event) => {
        // handle on load
        const onProgress = (event) => {
            const progressBar = event.target.querySelector('.progress-bar');
            const updatingBar = event.target.querySelector('.update-bar');
            updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
            if (event.detail.totalProgress === 1) {
            progressBar.classList.add('hide');
            } else {
            progressBar.classList.remove('hide');
            if (event.detail.totalProgress === 0) {
                event.target.querySelector('.center-pre-prompt').classList.add('hide');
            }
            }
        };

        document.querySelector('model-viewer').addEventListener('progress', onProgress);

        // handle onClick
        const modelViewer1 = document.querySelector("#hotspot-camera-view-demo");
        const annotationClicked = (annotation) => {
            let dataset = annotation.dataset;
            modelViewer1.cameraTarget = dataset.target;
            modelViewer1.cameraOrbit = dataset.orbit;
            modelViewer1.fieldOfView = '45deg';
        }

        modelViewer1.querySelectorAll('button').forEach((hotspot) => {
            hotspot.addEventListener('click', () => annotationClicked(hotspot));
        });

        const btnBack = document.querySelector(".btn-back");
        btnBack.onclick = () => {
            modelViewer1.cameraTarget = "0 0 0";
        }
    })

    return (
        <div className="island">
            <model-viewer 
                id="hotspot-camera-view-demo"  
                bounds="tight" 
                enable-pan src='./images/island_2.glb'
                ar ar-modes="webxr scene-viewer quick-look"
                camera-controls 
                touch-action="none"
                interpolation-decay="200"
                shadow-intensity="0" 
                exposure="0.45" 
                shadow-softness="1" 
                camera-orbit="1.198deg 80.79deg auto" 
                min-camera-orbit="auto auto 107.5m" 
                min-field-of-view="30deg"
            >
            <button 
                className="Hotspot" 
                slot="hotspot-1" 
                data-position="-15.17371364484508m 13.733440214997351m -0.38319811637248513m" 
                data-normal="-0.02078116632344306m -0.1802298925512806m 0.9834049669170842m" 
                data-visibility-attribute="visible"
                data-target="-15m -7m -80m"
                >
                <div className="HotspotAnnotation">Story</div>
            </button>

            <button 
                className="Hotspot" 
                slot="hotspot-3" 
                data-position="0.8963960088420251m 2.1090111828714697m -10.67504054997515m" 
                data-normal="0m -1.343588610839583e-7m 0.9999999999999911m" 
                data-visibility-attribute="visible"
                data-target="0.00m -22.00m -100.00m"
                >
                <div className="HotspotAnnotation">Game Play</div>
            </button>

            <button 
                className="Hotspot" 
                slot="hotspot-4" 
                data-position="10.691738579399255m 8.596935581875726m -19.161179077009717m" 
                data-normal="0.084068692003698m -0.6899835441859172m 0.718926396634195m" 
                data-visibility-attribute="visible"
                data-target="9m -11m -95m"
                >
                <div className="HotspotAnnotation">Road Map</div>
            </button>

            <button 
                className="Hotspot" 
                slot="hotspot-5" 
                data-position="15.6116381187966m 6.402890192149521m 7.410681504706385m" 
                data-normal="-0.06744800715356736m 0.9403464876600586m 0.3334655146734123m" 
                data-visibility-attribute="visible"
                data-target="15m -18m -84m"
                >
                <div className="HotspotAnnotation">Tokennomic</div>
            </button>

            <button 
                className="Hotspot" 
                slot="hotspot-6" 
                data-position="17.639094300976467m 6.981488777235602m -4.673789700264038m" 
                data-normal="0.11157101174070311m 0.9887687838192699m 0.09943943626005725m" 
                data-visibility-attribute="visible"
                data-target="16m -16m -93m"
                >
                <div className="HotspotAnnotation">About</div>
            </button>

            <div className="progress-bar hide" slot="progress-bar">
                <div className="update-bar"></div>
            </div>

            <button className="btn-back">
                Back
            </button>
            
            </model-viewer>
        </div>
    )
}
