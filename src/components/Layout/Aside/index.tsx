"use client";

import Image from "next/image";

import {
  WrapperAside,
  ContentNamePanel,
  ContentSocialMedia,
  SocialList,
  VerticalDivisor,
} from "./styles";

import iconLinkedin from "@/assets/linkedin.png";
import iconWhatsapp from "@/assets/whatsapp.png";
import iconGithub from "@/assets/github.png";

const Aside: React.FC = () => {
  return (
    <WrapperAside>
      <ContentNamePanel>
        <div>
          <p>
            <span>Por</span>
            <strong>Guilherme</strong>Santos
          </p>
        </div>
      </ContentNamePanel>

      <ContentSocialMedia>
        <SocialList>
          <li>
            <VerticalDivisor />
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/guifsantos/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="icon-social-media"
                src={iconLinkedin}
                alt="Linkedin"
                width={32}
                height={32}
                priority={false}
              />
            </a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=5511986701058"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="icon-social-media"
                src={iconWhatsapp}
                alt="Whatsapp"
                width={32}
                height={32}
                priority={false}
              />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Guilherme-Ferreira2107"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="icon-social-media"
                src={iconGithub}
                alt="Github"
                width={32}
                height={32}
                priority={false}
              />
            </a>
          </li>
        </SocialList>
      </ContentSocialMedia>
    </WrapperAside>
  );
};

export default Aside;
