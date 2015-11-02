/* jshint esnext:true */
export
var docCtrl = ['$scope',
    function($scope) {
        $scope.docs = [{
            title: 'Fisasrmonica',
            short_desc: 'Funzionerà?'
        }];
    }
];

export
var metaCtrl = ['$scope',
    function($scope) {
        $scope.test = "ok";
    }
];

export
var mainCtrl = ['$scope',
    function($scope) {
        $scope.data = `<!-- start slipsum code -->

			<h3>Is she dead, yes or no?</h3>
			<p>My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand? </p>

			<h3>I gotta piss</h3>
			<p>You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man. </p>

			<h3>Are you ready for the truth?</h3>
			<p>Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'? </p>

			<h3>Uuummmm, this is a tasty burger!</h3>
			<p>Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass. </p>

			<h3>Is she dead, yes or no?</h3>
			<p>The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee. </p>

			<!-- please do not remove this line -->

			<div style="
            display: none;
            ">
			<a href="
            http: //slipsum.com">lorem ipsum</a></div>

                <!-- end slipsum code -->
                `;
    }
];
