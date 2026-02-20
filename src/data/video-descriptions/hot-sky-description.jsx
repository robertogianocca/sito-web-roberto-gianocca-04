import CreditsTitle from "@/components/Video/Credits/CreditsTitle";
import CreditsName from "@/components/Video/Credits/CreditsName";
import CreditsWrapper from "@/components/Video/Credits/CreditsWrapper";
import VideoDescription from "@/components/Video/Description/VideoDescription";

export const hotSkyDescription = {
  credits: (
    <CreditsWrapper>
      <CreditsTitle>
        Direction, Camera, Editing, Post-production:
        <CreditsName>Roberto Gianocca</CreditsName>
      </CreditsTitle>

      <CreditsTitle>
        Collaboration and Assistance:
        <CreditsName>Caroline Cavalcante, Matteo Marazzi.</CreditsName>
      </CreditsTitle>

      <CreditsTitle>
        Robot Technical Assistance:
        <CreditsName>Carrara Modellismo</CreditsName>
      </CreditsTitle>
    </CreditsWrapper>
  ),
  description: <VideoDescription></VideoDescription>,
};
