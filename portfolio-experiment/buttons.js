function showNextFigure(){
  console.log("next button");
}
/*Carousel3D.prototype.modify = function() {

     var panel, angle, i;

     this.panelSize = this.element[ this.isHorizontal ? 'offsetWidth' : 'offsetHeight' ];
     this.rotateFn = this.isHorizontal ? 'rotateY' : 'rotateX';
     this.theta = 360 / this.panelCount;

     // do some trig to figure out how big the carousel
     // is in 3D space
     this.radius = Math.round( ( this.panelSize / 2) / Math.tan( Math.PI / this.panelCount ) );

     for ( i = 0; i < this.panelCount; i++ ) {
       panel = this.element.children[i];
       angle = this.theta * i;
       panel.style.opacity = 1;
       panel.style.backgroundColor = 'hsla(' + angle + ', 100%, 50%, 0.8)';
       // rotate panel, then push it out in 3D space
       panel.style[ transformProp ] = this.rotateFn + '(' + angle + 'deg) translateZ(' + this.radius + 'px)';
     }

     // hide other panels
     for (  ; i < this.totalPanelCount; i++ ) {
       panel = this.element.children[i];
       panel.style.opacity = 0;
       panel.style[ transformProp ] = 'none';
     }

     // adjust rotation so panels are always flat
     this.rotation = Math.round( this.rotation / this.theta ) * this.theta;

     this.transform();

   };*/
