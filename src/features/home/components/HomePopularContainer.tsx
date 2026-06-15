import { HomeCardWrapper } from "./common/HomeCardWrapper";
import { HomeContainerTitle } from "./common/HomeContainerTitle";

export function HomePopularContainer() {
  return (
    <div>
      <HomeContainerTitle>인기 작품</HomeContainerTitle>
      <HomeCardWrapper />
    </div>
  );
}
