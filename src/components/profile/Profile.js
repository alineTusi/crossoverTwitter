import React from "react";
import background from '../../../src/Image.jpg'
import profile from '../../../src/Profile.jpg'
import {
    DivContainer,
    HeadTitle,
    Image,
    Image2,
    AnotherDiv,
    Paragraph,
    Paragraph2
} from "./Profile.style"


 const Profile = () => {
    return(
        <DivContainer>
            <div>
               <HeadTitle>Gjorge Popov</HeadTitle>
            <Image src={background}></Image> 
            </div>
            
            <Image2 src={profile}></Image2>
            <AnotherDiv>
                <Paragraph>1 Following</Paragraph>
                <Paragraph2>0 Folowers</Paragraph2>
            </AnotherDiv>
        
        </DivContainer>
    )
}

export default Profile