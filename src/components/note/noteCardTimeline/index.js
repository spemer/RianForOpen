// @flow
import React, { Component } from 'react';
import TagInformation from './TagInformation/index';
import CardSnippet from './CardSnippet/index';
import PhotoCardSnippet from './PhotoCardSnippet/index';
import ContainerCss from '../note.css';
import css from './noteCardTimeline.css';

type DefaultProps = {
  themeColor: string
};

type Props = {
  themeColor: string
};

type State = {
  title: string,
  noteCount: number
};

class NoteCardTimeline extends Component<DefaultProps, Props, State> {
  static defaultProps = {
    themeColor: '#ff3466',
  };

  constructor(props: Props) {
    super(props);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  state = {
    title: '',
    noteCount: 10,
  };

  handleTitleChange: Function;

  handleTitleChange(event: Event & { currentTarget: { value: string } }) {
    this.setState({ title: event.currentTarget.value });
  }

  render() {
    return (
      <div className={ContainerCss['card-List']}>
        <div className={css.head}>
          <textarea
            className={css.title}
            placeholder="SEARCH TAG"
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
          <TagInformation noteCount={this.state.noteCount} />
        </div>
        <div className={css.mansory}>
          <PhotoCardSnippet
            title="The Universe Through A Child S "
            preview="In the history of modern astronomy, there is probably no one greater leap forward than the building and launch of the space telescope known as the Hubble. While NASA has had many ups and downs, the launch and continued operation of the Hubble space telescope probably ranks next to the moon landings and the development of the Space"
            time="2017.09.06"
            tag={['친구들과 함께하는 유쾌한 저녁', '태그', '글감']}
            themeColor={this.props.themeColor}
          />
          <PhotoCardSnippet
            title="What If They Let You Run The Hubble"
            preview="You might remember the Dell computer commercials in which a youth reports this exciting news to his friends that they are about to get their new computer by telling them, “Dude, you’re getting a Dell!” It"
            tag={['친구들과 함께하는 유쾌한 저녁', '태그', '글감']}
            publish={300}
            photo="shanghai.jpg"
            themeColor={this.props.themeColor}
          />
          <PhotoCardSnippet
            title="Moon Gazing"
            preview="When you enter into any new area of science, you almost always find yourself with a baffling new language of technical terms to learn before you can converse with the experts. This is certainly true in astronomy both in terms of terms that refer to the cosmos and terms that describe the tools of the trade, the most prevalent being the telescope.."
            publish={100}
            tag={['수업', '개발']}
            themeColor={this.props.themeColor}
          />
          <PhotoCardSnippet
            title="Space The Final Frontier"
            preview="The Emerald Buddha is a figurine of a sitting Budha, that is the is the palladium of the Kingdom of Thailand. The Buddha is made of green jade, suprisingly not of emerald, clothed in gold is approximately 45 cm tall. The Buddha is kept in the Chapel of the Emerald Buddha, which is located on the grounds of the Grand Palace in Bangkok."
            tag={['음악', '가사']}
            themeColor={this.props.themeColor}
          />
          <PhotoCardSnippet
            title="I want to hold your hand"
            preview="현재에 감사하고 경의를 표하라. 지금이 근본이 되고 중요한 구심점이 될 때 삶은 여유롭게 풀리기 시작한다."
            publish={93}
            tag={['개발', '영성', '수양']}
            themeColor={this.props.themeColor}
          />
          <CardSnippet
            title="It is not your fault"
            preview="현재에 감사하고 경의를 표하라. 지금이 근본이 되고 중요한 구심점이 될 때 삶은 여유롭게 풀리기 시작한다."
            publish={73}
            tag={['개발', '영성', '수양']}
            themeColor={this.props.themeColor}
          />
          <CardSnippet
            title="오늘의 하루는 맑음"
            preview="현재에 감사하고 경의를 표하라. 지금이 근본이 되고 중요한 구심점이 될 때 삶은 여유롭게 풀리기 시작한다."
            tag={['개발', '영성', '수양']}
            publish={13}
            themeColor={this.props.themeColor}
          />
          <CardSnippet
            title="오늘의 요리법"
            preview="현재에 감사하고 경의를 표하라. 지금이 근본이 되고 중요한 구심점이 될 때 삶은 여유롭게 풀리기 시작한다."
            tag={['개발', '영성', '수양']}
            publish={13}
            themeColor={this.props.themeColor}
          />
          <CardSnippet
            title="내일 해야할 것들"
            preview="현재에 감사하고 경의를 표하라. 지금이 근본이 되고 중요한 구심점이 될 때 삶은 여유롭게 풀리기 시작한다."
            tag={['개발', '영성', '수양']}
            publish={33}
            themeColor={this.props.themeColor}
          />
          <PhotoCardSnippet
            title="#일기"
            preview="현재에 감사하고 경의를 표하라. 지금이 근본이 되고 중요한 구심점이 될 때 삶은 여유롭게 풀리기 시작한다."
            tag={['개발', '영성', '수양']}
            publish={99}
            themeColor={this.props.themeColor}
          />
          <CardSnippet
            title="내가 사랑하는 음악들"
            preview="여유롭게 풀리기 시작한다."
            tag={['개발', '영성', '수양']}
            publish={13}
            themeColor={this.props.themeColor}
          />
          <CardSnippet
            title="일일 운동 목표량"
            preview="현재에 감사하고 경의를 표하라. 지금이 근본이 되고 중요한 구심점이 될 때 삶은 여유롭게 풀리기 시작한다."
            tag={['개발', '영성', '수양']}
            publish={300}
            themeColor={this.props.themeColor}
          />
          <CardSnippet
            title="지금 이 순간에 존재하는 방법들에 관하여"
            preview="현재에 감사하고 경의를 표하라. 지금이 근본이 되고 중요한 구심점이 될 때 삶은 여유롭게 풀리기 시작한다."
            tag={['개발', '영성', '수양']}
            themeColor={this.props.themeColor}
          />
          <CardSnippet
            title="그대와 나의 역할에 관하여"
            preview="현재에 감사하고 경의를 표하라. 지금이 근본이 되고 중요한 구심점이 될 때 삶은 여유롭게 풀리기 시작한다."
            tag={['감상']}
            publish={320}
            themeColor={this.props.themeColor}
          />
          <CardSnippet
            title="컴퓨터 공학 개론과 당신의 운명"
            preview="현재에 감사하고 경의를 표하라. 지금이 근본이 되고 중요한 구심점이 될 때 삶은 여유롭게 풀리기 시작한다."
            tag={['수업', '개발']}
            themeColor={this.props.themeColor}
          />
          <CardSnippet
            title="딥러닝 개론"
            preview="현재에 감사하고 경의를 표하라. 지금이 근본이 되고 중요한 구심점이 될 때 삶은 여유롭게 풀리기 시작한다."
            tag={['음악', '가사']}
            themeColor={this.props.themeColor}
          />
          <PhotoCardSnippet
            title="I want to hold your hand"
            preview="현재에 감사하고 경의를 표하라. 지금이 근본이 되고 중요한 구심점이 될 때 삶은 여유롭게 풀리기 시작한다."
            tag={['개발', '영성', '수양']}
            themeColor={this.props.themeColor}
          />
          <CardSnippet
            title="It is not your fault"
            preview="현재에 감사하고 경의를 표하라. 지금이 근본이 되고 중요한 구심점이 될 때 삶은 여유롭게 풀리기 시작한다."
            tag={['개발', '영성', '수양']}
            themeColor={this.props.themeColor}
          />
          <CardSnippet
            title="오늘의 하루는 맑음"
            preview="현재에 감사하고 경의를 표하라. 지금이 근본이 되고 중요한 구심점이 될 때 삶은 여유롭게 풀리기 시작한다."
            tag={['개발', '영성', '수양']}
            themeColor={this.props.themeColor}
          />
          <CardSnippet
            title="오늘의 요리법"
            preview="현재에 감사하고 경의를 표하라. 지금이 근본이 되고 중요한 구심점이 될 때 삶은 여유롭게 풀리기 시작한다."
            tag={['개발', '영성', '수양']}
            themeColor={this.props.themeColor}
          />
          <CardSnippet
            title="내일 해야할 것들"
            preview="현재에 감사하고 경의를 표하라. 지금이 근본이 되고 중요한 구심점이 될 때 삶은 여유롭게 풀리기 시작한다."
            tag={['개발', '영성', '수양']}
            themeColor={this.props.themeColor}
          />
          <CardSnippet
            title="#일기"
            preview="현재에 감사하고 경의를 표하라. 지금이 근본이 되고 중요한 구심점이 될 때 삶은 여유롭게 풀리기 시작한다."
            tag={['개발', '영성', '수양']}
            themeColor={this.props.themeColor}
          />
          <CardSnippet
            title="내가 사랑하는 음악들"
            preview="현재에 감사하고 경의를 표하라. 지금이 근본이 되고 중요한 구심점이 될 때 삶은 여유롭게 풀리기 시작한다."
            tag={['개발', '영성', '수양']}
            themeColor={this.props.themeColor}
          />
          <CardSnippet
            title="일일 운동 목표량"
            preview="현재에 감사하고 경의를 표하라. 지금이 근본이 되고 중요한 구심점이 될 때 삶은 여유롭게 풀리기 시작한다."
            tag={['개발', '영성', '수양']}
            themeColor={this.props.themeColor}
          />
        </div>
      </div>
    );
  }
}

export default NoteCardTimeline;
