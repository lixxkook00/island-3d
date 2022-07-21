import React from 'react'

export default function ModelViewer({model}) {
  return (
    <model-viewer 
        ref={model}
        id="hotspot-camera-view-demo"  
        bounds="tight" 
        enable-pan src='./images/island7.gltf'
        ar ar-modes="webxr scene-viewer quick-look"
        camera-controls
        camera-target="0 0 0"
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
            class="Hotspot gameplay" 
            slot="hotspot-3" 
            data-name="gameplay"
            data-target="0.00m -22.00m -93.00m" 
            data-normal="0m 1m 0m" 
            data-position="-0.13731682053599328m 0.8377597114419015m -5.373484045566966m" 
            data-visibility-attribute="visible"
        >
            <div class="HotspotAnnotation">
                <img src="./images/gameplay.png" alt="" />
            </div>
        </button>

        <button 
            class="Hotspot story" 
            slot="hotspot-4"
            data-name="story"
            data-target="-15m -7m -80m" 
            data-position="-14.9015823311893m 13.785732905606139m -0.3678642175748905m" 
            data-normal="-0.020781167034444877m 0.9834049911180218m 0.1802297604194435m" 
            data-visibility-attribute="visible"
        >
            <div class="HotspotAnnotation">
                <img src="./images/story.png" alt="" />
            </div>
        </button>
        
        <button 
            class="Hotspot about" 
            slot="hotspot-5" 
            data-name="about"
            data-target="-12m -12m -75m" 
            data-position="-11.210635639474113m 10.098773723700628m 8.677032433884243m" 
            data-normal="0.37251586787697294m 0.6007353892742824m 0.7073534620353125m" 
            data-visibility-attribute="visible"
        >
            <div class="HotspotAnnotation">
                <img src="./images/about.png" alt="" />
            </div>
        </button>
        
        <button 
            class="Hotspot tokenomic" 
            slot="hotspot-6"
            data-name="tokenomic" 
            data-target="15m -16m -80m" 
            data-position="14.761169239419083m 5.843096931899201m 7.317932801548255m" 
            data-normal="-0.1855656316405426m 0.954699863574524m 0.2326232293745228m" 
            data-visibility-attribute="visible"
        >
            <div class="HotspotAnnotation">
                <img src="./images/tokenomic.png" alt="" />
            </div>
        </button>
        
        <button 
            class="Hotspot roadmap" 
            slot="hotspot-7"
            data-name="roadmap"  
            data-target="9m -11m -95m"
            data-position="10.777018817840812m 8.95244601510392m -18.846553899529912m" 
            data-normal="0.28569650671472246m 0.9475348150863014m 0.14337112767350713m" 
            data-visibility-attribute="visible"
        >
            <div class="HotspotAnnotation">
                <img src="./images/roadmap.png" alt="" />
            </div>
        </button>

        <div className="progress-bar hide" slot="progress-bar">
            <div className="update-bar"></div>
        </div>

        <button className="btn-back" >
            <img src="./images/back.png" alt="" />
        </button>
        
    </model-viewer>
  )
}
