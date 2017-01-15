//////////////////////////////////////////////////////////////////////////////
//                Code Separator
//////////////////////////////////////////////////////////////////////////////

// AFRAME.registerPrimitive('a-poolball', AFRAME.utils.extendDeep({}, AFRAME.primitives.getMeshMixin(), {
//         defaultComponents: {
//                 pollball : {
// 			type: '8',
// 			stripped: true
// 		},
//         },
//         mappings: {
//                 type: 'poolball.type',
//                 stripped: 'poolball.stripped',
// 	}
// }));

//////////////////////////////////////////////////////////////////////////////
//		Code Separator
//////////////////////////////////////////////////////////////////////////////

AFRAME.registerComponent('poolball', {
	schema: {
		type : {
			type: 'string',
			default: '8'
		},
		stripped : {
			type: 'boolean',
			default: true
		},
	},
	init: function () {
		var options = {
			textureW : 512
		}
		options.ballDesc = this.data.type
		options.stripped = this.data.stripped
		console.log('options', options)
		var mesh = THREEx.createPoolBall(options);
		this.el.object3D.add( mesh )
		// this.el.setObject3D('superRoot', mesh);
	},
	update: function(){
		var mesh = this.el.object3D.children[0]
		var texture = mesh.material.map
		var canvas = mesh.material.map.image
		texture.needsUpdate = true
		// build texture based on ballDesc
		if( this.data.type === 'cue' ){
			THREEx.createPoolBall.draw(canvas, '', false, "#ffffff");
		}else if( this.data.type === 'black' ){
			THREEx.createPoolBall.draw(canvas, '', false, "#000000");
		}else{	
			var fillStylePerDesc	= {
				'1'	: "#FDD017",	// Yellow
				'2'	: "#2B65EC",	// Blue
				'3'	: "#F62817",	// Red
				'4'	: "#7A5DC7",	// Purple
				'5'	: "#F87217",	// Orange
				'6'	: "#348017",	// Green
				'7'	: "#A52A2A",	// Brown or burgundy (tan in some ball sets)
				'8'	: "#000000",	// Black
				'9'	: "#FDD017",	// Yellow
			};
			// sanity check
			console.assert(Object.keys(fillStylePerDesc).indexOf(this.data.type) !== -1);
			// build the texture
			var fillStyle	= fillStylePerDesc[this.data.type];
			THREEx.createPoolBall.draw(canvas, this.data.type, this.data.stripped, fillStyle);
		}

	}
});
