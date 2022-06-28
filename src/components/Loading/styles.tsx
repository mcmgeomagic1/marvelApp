import styled from 'styled-components'
import image1 from "../../assets/images/image1.jpg"
import image2 from "../../assets/images/image2.jpg"
import image3 from "../../assets/images/image3.jpg"
import image4 from "../../assets/images/image4.jpg"
import image5 from "../../assets/images/image5.png"
import image6 from "../../assets/images/image6.jpg"
import image7 from "../../assets/images/image7.png"
import image8 from "../../assets/images/image8.jpg"
import image9 from "../../assets/images/image9.jpg"
import image10 from "../../assets/images/image10.png"
import image11 from "../../assets/images/image11.jpg"
import image12 from "../../assets/images/image12.jpg"
import image13 from "../../assets/images/image13.jpg"
import { keyframes } from 'styled-components'

const bigToSmall= keyframes`
	0%{
		transform: rotate(-5deg)
	}

	100%{
		transform: rotate(0deg);
		opacity: 0;
	}

`
const ImageLoop = keyframes`
	0%{
		background: url(${image1});
		font-size: 660%;
		&{
			-webkit-text-fill-color: transparent;
			-webkit-background-clip: text;
		}
	}
	10%{
		background: url(${image2});
		&{
			-webkit-text-fill-color: transparent;
			-webkit-background-clip: text;
		}
	}
	15%{
		background: url(${image3});
		&{
			-webkit-text-fill-color: transparent;
			-webkit-background-clip: text;
		}
	}
	20%{
		background: url(${image4});
		&{
			-webkit-text-fill-color: transparent;
			-webkit-background-clip: text;
		}
	}
	25%{
		background: url(${image5});
		&{
			-webkit-text-fill-color: transparent;
			-webkit-background-clip: text;
		}
	}
	40%{
		background: url(${image6});
		&{
			-webkit-text-fill-color: transparent;
			-webkit-background-clip: text;
		}
	}
	45%{
		background: url(${image7});
		&{
			-webkit-text-fill-color: transparent;
			-webkit-background-clip: text;
		}
	}
	60%{
		background: url(${image8});
		&{
			-webkit-text-fill-color: transparent;
			-webkit-background-clip: text;
		}
	}
	70%{
		background: url(${image9});
		&{
			-webkit-text-fill-color: transparent;
			-webkit-background-clip: text;
		}
	}
	75%{
		background: url(${image10});
		&{
			-webkit-text-fill-color: transparent;
			-webkit-background-clip: text;
		}
	}
	77%{
		background: url(${image11});
		&{
			-webkit-text-fill-color: transparent;
			-webkit-background-clip: text;
		}
	}
	78%{
		background: url(${image12});
		font-size: 290%;
		&{
			-webkit-text-fill-color: transparent;
			-webkit-background-clip: text;
		}
	}
	80%{
		background: url(${image5});
		&{
			-webkit-text-fill-color: transparent;
			-webkit-background-clip: text;
		}
	}
	84%{
		background: url(${image7});
		&{
			-webkit-text-fill-color: transparent;
			-webkit-background-clip: text;
		}
	}
	89%{
		background: url(${image2});
		font-size: 290%;
		&{
			-webkit-text-fill-color: transparent;
			-webkit-background-clip: text;
		}
	}
	93%{
		background: url(${image5});
		&{
			-webkit-text-fill-color: transparent;
			-webkit-background-clip: text;
		}
	}
	97%{
		background: url(${image7});
		&{
			-webkit-text-fill-color: transparent;
			-webkit-background-clip: text;
		}
	}
	99%{
		background: url(${image2});
		font-size: 290%;
		&{
			-webkit-text-fill-color: transparent;
			-webkit-background-clip: text;
		}
	}
	
	100%{
		background: url(${image13});		
		opacity: 0.3;
	}

`
export const StyledContainer = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${({theme}) => theme.colors.background};
	padding: 0;
	color: transparent;
	font-size: 230%;
	text-transform: uppercase;
	font-weight: 900;

	@media(max-width: ${({theme}) => theme.mobile}) {
		font-size: 180%;
	}


	h1 {
		background-size: cover;
		background-position: center;
		animation: ${ImageLoop} 2.5s ease-in-out;
		letter-spacing: -18px;
		
	}
`
