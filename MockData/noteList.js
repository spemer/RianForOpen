let mockObj = [];
mockObj[0] = {
	title: '자바 프로그래밍',
	tags: ['3학년1학기', '코딩'],
	is_publish: false,
	data: `<h3>자바의 이해</h3>

<p><u>Hello, &nbsp;Java!: 세상에서 가장 사랑받는 프로그래밍 언어</u></p>

<h4>public class HelloWorld {
	<br>&nbsp; &nbsp;public static void main(String[] args) {
	<br>&nbsp; &nbsp; &nbsp; &nbsp; System.out.println(&quot;Hello World!&quot;);
	<br>&nbsp; }
	<br>}</h4>

<p>객체 지향 프로그래밍과 클래스 기법</p>

<ul>
	<li>객체지향이란 무엇인가

		<ul>
			<li>즉, 객체 지향 프로그래밍이란 각각의 컴퓨터 부품을 만들고 그 부품들을 조립하여 컴퓨터를 만들 듯이 객체를 만들고 그 <span style="background-color: rgb(255, 250, 165);">객체들을 조립하여 소프트웨어를 만드는 기법</span>이다. 객체 지향 프로그래밍의 특징은 다음과 같다</li>
		</ul>
	</li>
	<li>상속

		<ul>
			<li>이미 작성된 클래스(부모 클래스)를 이어받아 새로운 클래스(자식 클래스)를 생성하며, 기존의 코드를 재사용할 수 있는 강력한 기법
				<br>출처: <a href="http://luckyyowu.tistory.com/190">http://luckyyowu.tistory.com/190</a> [요우의 내맘대로 블로그]</li>
		</ul>
	</li>
	<li>메쏘드 구조와 메모리&nbsp;</li>
	<li>쓰레기 수집의 효율성</li>
</ul>

<p>자바와 정적 타입</p>

<ol>
	<li>정적타입의 장점</li>
	<li>안정성을 고려한 개발</li>
</ol>

<h3>자바와 스프링 프레임워크</h3>

<p>대규모 어플리케이션의 이해</p>

<ul>
	<li>안정적인 구조를 위한 설계</li>
	<li>장기적 관점의 유지 보수 및 구축</li>
	<li>데이터 베이스의 유기적 통합</li>
</ul>

<p>MVC 패턴의 이해</p>

<table style="width: 100%;">
	<tbody>
		<tr>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
		</tr>
		<tr>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
		</tr>
		<tr>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
		</tr>
		<tr>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
		</tr>
	</tbody>
</table>`,
};
mockObj[1] = {
	title: '중국 스마트 무인 편의점의 현재 : Bingobox',
	tags: ['중국', '경제', '무역'],
	is_publish: false,
	data: `<section name="bb09">

	<p name="f109">빙고 박스의 모든 것은 통합 시스템을 통해 관리됩니다. 관리자 페이지와 앱을 통해 상품 판매 데이터, 재고 수량, 유저 데이터 분석이 가능하며 이를 기준으로 매일 정해진 시간에 매장 관리 담당자 방문하여 매장을 점검하고 부족한 재고를 채워 넣습니다. 담당자가 매장을 점검하고 재고를 보충하는데는 채 20분이 안 걸립니다.</p>

	<h4 name="67fc">▍도난 방지&nbsp;시스템</h4>

	<p name="774f">빙고 박스의 가장 큰 문제는 24시간 무인으로 운영되는 매장 특성상 절도의 위험이 크다는 것인데요. 의외로 빙고 박스는 실제 운영을 시작한 지 6개월 이상이 지났으나 그동안 도난 사고가 단 한 건도 발생하지 않았다고 합니다. 도대체 어떻게 가능한 걸까요?</p>

	<p name="8b76">우선 첫째로 빙고 박스에서는 매장 관리와 운영을 위해 24시간 연중무휴로 고객센터가 운영되며 CCTV를 통해 매장 내의 모든 상황이 녹화됩니다. CCTV는 담당 직원이 24시간 모니터링하여 절도 의심 상황이 발견되면 경보음이 울리며 안내 방송이 나가는 동시에 출입문이 자동으로 잠깁니다.</p>
	<figure data-scroll="native" name="e6ab">
		<br>
	</figure>

	<p name="2c3c">둘째, 빙고 박스에서 판매되는 모든 상품에는 위 사진처럼 금속이 들어있는 하얀색 라벨이 부착되어 있습니다. 라벨은 상품의 신분증과 같습니다. 이를 기준으로 결제 시 상품을 분류하고 결제 여부를 판별하죠. 고객이 결제를 하지 않고 출입 통로를 지나는 경우 역시 경보음이 울리며 안내 방송이 나가는 동시에 출입문이 자동으로 잠깁니다.</p>
	<figure data-scroll="native" name="ba43">
		<br>
	</figure>

	<p name="b2dd">셋째, 스마트 도난 방지 시스템. 아무리 CCTV 가 24시간 녹화 및 모니터링 되고 도난 방지를 위한 라벨이 부착되어있다고 하더라도 사각지대에서 라벨을 손상시킨 뒤 훔쳐 갈 수도 있겠죠? 이를 방지하기 위해 출입 통로에는 스마트 도난 방지 시스템이 설치되어 있습니다.</p>

	<p name="61ce">빙고 박스를 나가려면 반드시 상품 스캔 구역(扫码区)를 지나야 하는데 위에서 소개한 하얀색 라벨을 통해 실제 결제 데이터와 고객이 가지고 나가는 상품 데이터를 비교 대조하여 확인합니다. 고객이 라벨을 훼손한 경우 출입문은 개방되지 않습니다.</p>
</section>
<section name="238a">

	<p name="687c">미래의 새로운 유통 방식으로 자리 잡을 신유통(新零售)에 대한 의견이 궁금해 메시지를 보냈더니 빙고 박스 관계자는 다음과 같이 답했습니다.</p>

	<blockquote name="6723">&ldquo;빅데이터는 기업의 사업 이윤을 위해서가 아니라 대중의 생활 편의를 위해 사용되어야 한다. 빙고 박스는 빅데이터를 통해 매장 운영자에게 매장 관리의 편의를 제공하고 혁신 기술을 활용한 운영 시스템을 바탕으로 고객에 서비스 사용 편의를 제공할&nbsp;것이다.&rdquo;</blockquote>

	<p name="3451">중국에선 신유통(新零售)을 대표하는 스마트 편의점이 점차 보편화되고 있습니다. 며칠 전까지 진행된 618 온라인 쇼핑 페스티벌에서 알리바바와 징동은 신유통으로의 전환 의지를 언뜻 내비쳤는데요. 스타트업과 거대 공룡들까지 뛰어든 신유통 시장이 앞으로 어떻게 발전해 나갈지 기대를 해봐도 좋을 것 같습니다.</p>
</section>`,
};
mockObj[2] = {
	title: '즐겁게 배우며 성장하자, 코드스쿼드 플레이그라운드',
	tags: ['코딩', '방학', '영감'],
	is_publish: false,
	data: `
<p name="33ed">자바지기로 활동하고 있는 박재성 마스터 입니다.</p>

<p name="1833">저는 어린 시절 수학을 좀 했습니다. 수학 한 과목 때문에 좋은 대학까지 진학했다는 생각을 합니다. 그런데 대학을 진학학 후 수학과의 인연은 끝이었습니다. 저는 수학을 진심으로 좋아한 것이 아니라 좋은 대학을 가기 위해, 좋은 성적을 얻기 위해 좋아하는 것처럼 위장한 것입니다.</p>

<p name="98a9">프로그래머의 길을 걷기 시작했습니다. 교육기관에서 체계적으로 교육을 받은 경험은 프로그래밍을 시작할 때 3개월 뿐이었습니다. 체계적인 교육을 받지는 못했지만 프로그래밍으로 무언가를 만드는 것을 좋아하고, 아직도 새로운 기술을 배울 때 짜릿함을 느낍니다.</p>

<p name="53bf">이 둘의 차이는 무엇일까요?
	<br>저는 수학을 배우면서 이 지식을 어디에 어떻게 활용해야 하는지에 대한 동기 부여도 부족했고, 기존의 복잡한 문제를 추상화된 수학 공식을 통해 단순화하는 즐거움을 느낄 수도 없었어요. 하지만 프로그래밍은 달랐습니다. 일단 기초적인 지식은 모르지만 무언가를 만들면서 즐거움을 느꼈고, 좀 더 나은 서비스를 만들기 위해 하나씩 알아가는 재미가 있었습니다. 처음에는 쓰레기 같은 소스 코드 였지만 지속적인 연습을 통해 조금씩 개선해 가는 과정이 즐거웠습니다. 즉, 이미 완성된 결과물을 보면서 좌절감을 느낀 것이 아니라 좀 더 나은 결과물을 만들기 위해 노력하는 과정 속에서 즐거움을 느낄 수 있었습니다.</p>

<p name="27cf">경험이 쌓이면서 느리게 가는 것이 더 길고 오래갈 수 있다는 것을 느끼고 있습니다. 느리게 갈 때 그 속에서 즐거움과 행복감을 느낄 수 있다고 생각합니다. 코드스쿼드의 <strong>플레이그라운드</strong> 과정은 작은 크기의 소프트웨어라도 무엇인가를 만들어가면서 즐거움을 느꼈으면 하는 바람으로 설계했습니다. 프로그래밍 언어의 문법을 먼저 학습하는 것이 아니라 무엇인가를 만들어가면서 필요한 지식을 학습하는 방식의 경험을 할 수 있도록 했습니다.</p>

<p name="d98b">작은 크기의 프로그래밍 연습이지만 기존과는 다른 경험을 통해 앞으로의 소프트웨어 학습 방식에 힌트를 얻었으면 합니다.</p>

<p name="b803">프로그래밍을 시작하는 친구들에게 가장 큰 어려움은 개발환경 때문이라 생각합니다. 정말 사소한 이유 때문에 다음 단계로 넘어가지 못하고 포기하는 경우를 많이 봅니다. 이런 단점을 보완하기 위해[<a data-href="https://youtu.be/fXIpMyrI3U8" href="https://youtu.be/fXIpMyrI3U8" rel="noopener nofollow" target="_blank">프로그래밍 학습의 어려움과 극복하는 방법</a>] 과 [<a data-href="https://youtu.be/Xcy2Pq6LABk" href="https://youtu.be/Xcy2Pq6LABk" rel="noopener nofollow" target="_blank">프로그래밍 학습 방법</a>]과정을 통해 프로그래밍 학습의 초반 두려움을 극복하고 다음 단계로 도전할 수 있는 용기를 얻기를 기대합니다.</p>

<p name="c7c5">아래 두 개의 동영상은 앞으로 프로그래밍을 학습하는 과정에서 경험하게 될 것과 이를 극복하는데 도움을 줄 것입니다.</p>

<p name="2fa4"><em>[</em><a data-href="https://youtu.be/fXIpMyrI3U8" href="https://youtu.be/fXIpMyrI3U8" rel="noopener nofollow" target="_blank"><em>프로그래밍 학습의 어려움과 극복하는 방법</em></a><em>]<br>[</em><a data-href="https://youtu.be/Xcy2Pq6LABk" href="https://youtu.be/Xcy2Pq6LABk" rel="noopener nofollow" target="_blank"><em>프로그래밍 학습 방법</em></a><em>]</em></p>

<p name="7121">험난한 과정을 슬기롭게 극복해서 초보 개발자로 사회에서 만날 수 있기를 기대합니다.</p>

<blockquote name="e9dd">코드스쿼드 <strong>플레이그라운드는</strong>,<strong><br></strong>코드스쿼드 마즈터즈 코스 시작에 앞서, 프로그래밍 입문자들에게 보다 올바른 학습법과 기초 지식을 공유하는 예비 과정입니다. 플레이그라운드의 목적은 보다 많은 분들이 개발자의 길을 좀더 쉽게 걸을 수 있도록 돕는 것입니다.
	<br>온라인 과정으로 스스로 학습을 하고, 필요하면 모각코 활동에 참여해서 함께 공부할 수 있습니다.
	<br>플레이 그라운드와 모각코 활동에 대한 자세한 내용은 6.23일(금요일) 코드스쿼드 <a data-href="http://codesquad.kr/html/program/dist/masters.html" href="http://codesquad.kr/html/program/dist/masters.html" rel="noopener nofollow" target="_blank">홈페이지</a>를 통해 공개됩</blockquote>

`,
};
mockObj[3] = {
	title: '함수형 프로그래밍의 이해',
	tags: ['자바스크립트', '코딩', '자습'],
	is_publish: false,
	data: `<p>교수명: 이문규</p>

<p>수업시간: 화, 수, 목 3~4교시</p>

<p>강의동료: cci45@naver.com, rockofrian@google.com, asd123@makeer.com</p>

<p>- 중간고사: 4월 28일</p>

<p>- 기말고사: 6월 13일</p>

<p>
	<br>
</p>

<p>---</p>

<p>
	<br>
</p>

<p>### Lecture 1: &nbsp;오리엔테이션</p>

<p>* 지각 3번에 결석 1번</p>

<p>* 결석 3번시, F학점</p>

<p>
	<br>
</p>

<p>
	<br>
</p>

<p>### Lecture 2: &nbsp;객체지향프로그래밍 시대의 종말</p>

<p>* 객체지향 프로그래밍이란?</p>

<p>*</p>`,
};
mockObj[4] = {
	title: '창업 프로그램',
	tags: ['창업'],
	is_publish: false,
	data: `<h3>### 서울창업허브
	<br>* 예비창업기업 육성 프로그램
	<br>* 5월 10일(수) 5시까지
	<br>
	<br>### 롯데엑셀러레이터
	<br>* 4월 27일 일 12:00
	<br>
	<br>### 창조기업 비즈니스 센터 입주기업 모집공고
	<br>* 입주 신청서및 사업계획서
	<br>* 이력서
	<br>* 주민등록증
	<br>* 서울시 역삼동
	<br>* 신입 채용시 인건비 월 30~60만원 지원, 디자인비 200만원 지원
	<br>* 법인 설립 무료 지원, 세무회계비 50%비용 지원
	<br>* 4월 27일
	<br>
	<br>### 대한민국 창업 리그
	<br>* 5.8(월)까지
	<br>
	<br>### 판교 창조경제밸리 창업존 입주
	<br>* 4월 27일 (목) 16:00까지
	<br>
	<br>### 정주영창업경진대회
	<br>* 5월 1일(월) 15:00까지
	<br>
	<br>### 5월 디캠프
	<br>
	<br>### 본엔젤스
	<br>
	<br>### 스파크랩스
	<br>* 10th batch application will open in June, 2017.
	<br>* 5월 15일 프로그램 스파크랩 베이징 프로그램 시작</h3>`,
};
mockObj[5] = {
	title: '시사저널 - 정운찬 전 총리 “경제계에도 헌재 있다면 한국 경제는 탄핵감”',
	tags: ['경제', '논쟁'],
	is_publish: false,
	data: `<h2>정운찬 전 총리 &ldquo;경제계에도 헌재 있다면 한국 경제는 탄핵감&rdquo;</h2>

<p>11일 비공개 세미나서 밝혀&hellip;&ldquo;국내 대기업 D(개발)만 있고 R(연구)은 없다&rdquo; 지적</p>

<p><a href="http://www.sisapress.com/search/all/journal/1/12?ord=N&searchAuthName=%EC%9D%B4%EC%84%9D">이석</a> 기자 ㅣls@sisapress.com |승인 2017.01.13(星期五) 16:32:42</p>

<p><img src="https://i.froala.com/download/f50063bdf37ddb3a3d4aca8c2a2af78241e4aee3.?1498199808" class="fr-fic fr-dii"><img src="https://i.froala.com/download/520b5e88b701992590a3ad08f30f4e7013eb770d.?1498199808" class="fr-fic fr-dii"><img src="https://i.froala.com/download/d26582cc80c59be17645e5cff2a300db47d048d9.?1498199808" class="fr-fic fr-dii"><img src="https://i.froala.com/download/732f15eb45442dbd65e506e0ab5b24fd61c1ab51.?1498199808" class="fr-fic fr-dii"><img src="https://i.froala.com/download/db416ef97f90782d25963ef2966f8124e23349f4.?1498199808" class="fr-fic fr-dii"><img src="https://i.froala.com/download/e5913655139bee36644a7f6d4e0c944af884df7f.?1498199809" class="fr-fic fr-dii">
	<a href="http://www.sisapress.com/journal/article/163439#"><img src="https://i.froala.com/download/36ffe4ecf52985e25876d71e77421f3593f56666.?1498199809" class="fr-fic fr-dii"></a>
	<br>
</p>

<p>글씨크게글씨작게프린트<img src="https://i.froala.com/download/09db6c9ace9f6d620689977b93f040a7e16ea769.?1498199809" class="fr-fic fr-dii"></p>

<p><img src="https://i.froala.com/download/5159a21c63fb41e2144157983cc42b8179017a8f.?1498199809" class="fr-fic fr-dii"><img src="https://i.froala.com/download/44c6d3ec48536a270cfe9d9ec3a5a7a518268dd6.?1498199809" class="fr-fic fr-dii"><img src="https://i.froala.com/download/187e03b1dd084bdef0ca9374e25df856fbfdde2d.?1498199809" class="fr-fic fr-dii"><img src="https://i.froala.com/download/a0580c49435237a650d193d27e55aa19998bcb4a.?1498199809" class="fr-fic fr-dii"><img src="https://i.froala.com/download/16afb7c00dd53bfadd5c76459225d0afb7140d09.?1498199809" class="fr-fic fr-dii"></p>

<p>한국 경제가 신음하고 있다. 시간이 갈수록 &lsquo;성장 엔진&rsquo;이 식어가고 있는 게 문제다. 정부는 올해 성장률 전망치를 기존 3%에서 2.6%로 내려잡았다. IMF 외환위기 이후 최저치다. 대기업과 중소기업의 격차도 갈수록 확대되고 있다. 수백억원이 넘는 유보금을 곳간에 쌓아놓고 있는 대기업들은 &ldquo;투자할 곳이 없다&rdquo;고 아우성친다. 반면 중소기업은 &ldquo;투자할 곳은 많은데 돈이 없다&rdquo;고 하소연한다. 해법은 없는 것일까. 점점 식어가고 있는 &lsquo;한국호&rsquo;의 성장 엔진을 재점화시키고, 양극화 문제를 해결할 방법은 없는 것일까.</p>

<p>&nbsp;</p>

<p>경제학자이자 전직 국무총리였던 정운찬 동반성장연구소 이사장도 현재 한국 경제가 위기 상황임을 지적했다. 그는 1월11일 서울 중구의 모처에서 열린 비공개 세미나에서 &ldquo;경제계에도 헌법재판소가 있다면 한국 경제는 탄핵감&rdquo;이라고 잘라 말했다.&nbsp;</p>

<p>&nbsp;</p>

<p><img src="https://i.froala.com/download/bf2236ff1803a14429f60ddc4a8a987a6c469876.?1498199812" class="fr-fic fr-dii"></p>

<p>정운찬 전 국무총리 &copy; 시사저널 임준선</p>

<p>
	<br>
</p>

<p>대기업서 중소기업으로 돈 흐르는 생태계 조성 시급&nbsp;</p>

<p>&nbsp;</p>

<p>그는 우선 박근혜 정부의 경제 정책부터 꼬집었다. 현오석․최경환․유일호 등 세 명의 경제부총리가 소득 증대를 통한 소비 확대를 꾀했지만 성과를 내지 못했다. &ldquo;현 상황에서 무작정 소비만 늘리는 것은 실효성이 없다&rdquo;는 게 정 전 총리의 판단이다. 재계 생태계 역시 마찬가지다. &ldquo;10대그룹의 유보금은 450조원에 이른다. 30대 그룹으로 범위를 넓히면 590조원이다. 이 돈이 돌 수 있는 생태계를 회복하는 것이 무엇보다 시급하다&rdquo;고 그는 지적했다.</p>

<p>&nbsp;</p>

<p>정 전 총리는 &ldquo;우리나라 중소기업은 전체 사업체의 99%, 고용의 89%를 책임지고 있다. 하지만 대기업과 반대로 중소기업은 &lsquo;투자할 곳은 많은 데 돈이 없다&rsquo;고 아우성치고 있다&rdquo;며 &ldquo;대기업이 쌓아놓은 돈이 자연스럽게 중소기업으로 흘러가게 유도해야 한다&rdquo;고 말했다.</p>

<p>&nbsp;</p>

<p>일례로 그는 과거 영국 싱크탱크 데모스(Demos)가 주최하는 컨퍼런스에 참석한 적이 있다. 한국과 중국, 인도의 R&amp;D(연구․개발) 상황을 점검하는 자리였다. 참석자들의 의견은 크게 엇갈렸다. &lsquo;쫓아오려면 아직 멀었다&rsquo;는 의견과 &lsquo;긴장해야 한다&rsquo;는 의견이 팽팽하게 맞섰다. 하지만 한국에 대한 평가는 대동소이했다. &lsquo;한국 기업들이 D(개발)에만 돈을 쓰면서 R(연구)에 대한 투자는 하지 않는다&rsquo;는 게 참석자 대부분의 평가였다.</p>

<p>&nbsp;</p>

<p>그는 &ldquo;한국의 연구 및 개발비 지출은 세계 5위 수준이다. 하지만 대부분이 설비 투자에만 집중되고 있다&rdquo;며 &ldquo;이 돈을 일정 수준 중소기업으로 돌린다면 양극화나 소비 문제도 자연스럽게 해결될 수 있다&rdquo;고 말했다.</p>

<p>&nbsp;</p>

<p>2011년 그가 동반성장위원회 위원장 시절 주장했던 &lsquo;초과이익 공유제&rsquo;와 비슷한 개념이다. 당시 이건희 삼성전자 회장은 &ldquo;사회주의 국가에서 쓰는 말인지, 자본주의 국가에서 쓰는 말인지, 공산주의 국가에서 쓰는 말인지 모르겠다&rdquo;며 &ldquo;내가 어릴 때부터 기업가 집안에서 자랐고 학교에서도 경제학 공부를 계속 해왔는데 그런 이야기를 들어보지도 못했다&rdquo;고 말해 주목을 받았다.</p>

<p>&nbsp;</p>

<p>정 전 총리 역시 적지 않게 곤욕을 치렀다. 당시 그가 제안했던 &lsquo;중소기업 적합업종 선정&rsquo;이나 &lsquo;종소기업 위주의 정부구매&rsquo; 등은 현재 상당 수준 궤도에 올랐다. 국회에서도 법제화가 활발하게 진행되고 있다. 하지만 초과이익 공유제에 대한 경제계의 반응은 여전히 싸늘하다. &ldquo;공산주의자가 아니냐&rdquo;는 말까지 들었을 정도다.</p>

<p>&nbsp;</p>

<p>그는 &ldquo;초과이익 공유제는 대기업의 불공정 거래에 대한 보상적 개념으로 이해해야 한다&rdquo;고 말했다. 기업 환경이 치열해지면서 &lsquo;코스트 리덕션(원가 절감)&rsquo;이 재계의 화두가 되고 있다. 대기업들은 우선적으로 납품 가격 후려치기를 원가를 절감에 나섰다. 그는 &ldquo;한때 9%대에 이르는 납품 업체의 이익률이 현재 3% 수준으로 떨어졌다. 대기업에 납품하는 한 중견기업의 오너가 나를 찾아와 &lsquo;이민을 가겠다&rsquo;고 토로할 정도&rdquo;라며 &ldquo;납품가 후려치기를 통해 이익을 냈다면 일정 부분 협력업체에 공유하는 것은 당연하다&rdquo;고 강조했다. 그는 이 개념을 &lsquo;사회 작동 원리&rsquo;라고 표현했다.</p>

<p>&nbsp;</p>

<p>요컨대 삼성전자는 2010년 17조원의 영업이익을 냈다. 연초 목표인 10조원보다 7조원이 초과된 것이다. 이중 1%만 협력업체에 지원해도 중소기업들의 어려움을 경감시킬 수 있다는 것이다. 그가 2009년 이명박 대통령의 총리직 제안을 수락한 이유도 이 때문이다. 정 전 총리는 &ldquo;이 대통령이 5번이나 총리직으로 제의해 미안한 감도 없지 않았다. 한편으로 전공을 살려 양극화를 완화하고 경제를 살리고자 하는 욕심도 있었다&rdquo;고 말했다. 이후 그는 동반성장위원회를 만들어 초대 위원장을 맡았다.</p>

<p>&nbsp;</p>

<p>물론 초과이익 공유제는 한국 경제를 살리기 위한 단기 처방에 불과하다. 중장기적으로는 기업이 기술 혁신을 통해 성장 동력을 마련해야 한다. 창의적인 인재를 육성할 수 있도록 교육 제도 또한 손봐야 한다는 것이 그의 주장이다. 정 전 총리는 &ldquo;삼성과 대우그룹의 가장 큰 차이는 인적 구성&rdquo;이라며 &ldquo;김우중 전 대우그룹 회장은 모교인 경기고 출신을 대부분 핵심 보직에 배치했다. 삼성은 반대다. 인적 구성이 다양했기 때문에 지금의 초일류 기업을 만들 수 있었다&rdquo;고 평가했다.</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&ldquo;박 대통령 &lsquo;통일 대박&rsquo; 외치며 &lsquo;쪽박&rsquo; 만들어&rdquo;&nbsp;</p>

<p>&nbsp;</p>

<p>남북 경협을 확대하는 것도 한국 경제의 장기 성장 동력을 재가동시킬 수 있는 해법 중 하나다. 그는 &ldquo;얼마 전 개성공단이 폐쇄되는 것을 보고 마음이 아팠다. 박 대통령은 &lsquo;통일 대박&rsquo;을 외치면서 &lsquo;쪽박&rsquo;을 만들었다&rdquo;며 &ldquo;그나마 개성공단도 폐쇄될 때까지 완성률이 40%에 불과했다. 해주와 신의주, 원산까지 남북 경협을 확대해야 자연스럽게 통일이 가능하다. 통일이 되더라도 남북 격차를 줄일 수 있다&rdquo;고 말했다.</p>

<p>&nbsp;</p>

<p>MVC 패턴의 이해</p>

<table style="width: 100%;">
	<tbody>
		<tr>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
		</tr>
		<tr>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
		</tr>
		<tr>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
		</tr>
		<tr>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
		</tr>
	</tbody>
</table>`,
};
mockObj[6] = {
	title: '[개발인] ‘노드JS’ 기여자가 IBM으로 가기까지',
	tags: ['코딩', '테크'],
	is_publish: false,
	data: `<p>Google 번역번역에서 제공</p>

<p>&lsquo;노드JS&rsquo;는 자바스크립트 생태계에서 가장 주목받고 있는 기술이다. 한때 커뮤니티 안에서 의견 충돌로 잡음도 있었지만 최근 재단 설립 등으로 지원도 체계적으로 이뤄지고 있다. 국내에서도 노드JS를 실험하고 서비스에 적용하는 기업도 조금씩 늘고 있다. 하지만 아직 새롭고, 오픈소스 기술이라는 점에 기업들은 선뜻 노드JS를 적용하지 못하는 분위기다. 노드JS가 공개된 지 6년이 지난 지금, 노드JS의 기술 성숙도는 어느 정도일까. 오랫동안 노드JS 핵심 기여자로 활동하고 노드JS 전문 스타트업까지 설립했던 버트 벨더 개발자에게 그 답을 들어보았다.</p>

<p>
	<br>
</p>

<p>노드JS 기술의 변화</p>

<p>
	<br>
</p>

<p>노드JS는 2009년 나온 오픈소스 기술로, 자바스크립트로 서버단 기술을 조절한다는 점에서 큰 각광을 받았다. 비동기 이벤트 기반 아키텍처와 V8 자바스크립트 엔진을 이용해 서버의 많은 요청을 빠르게 처리할 수 있고, 프론트엔드와 서버단의 기술로 같은 언어로 개발할 수 있다는 것도 큰 장점이다. 버트 벨더 개발자가 노드JS에 관심을 가진 것은 2011년 즈음이었다. 네덜란드 출신 개발자였던 그는 당시 건설회사에서 필요한 프로그램을 작성하고 있었다. 당시 모델링한 결과를 웹사이트에 렌더링해서 보여주는 작업을 했는데, 기존 기술은 실용적일 수 있으나 빠르지는 않았다. 그때 먼저 찾은 것이 &lsquo;라이노&lsquo;였다. 라이노는 자바스크립트 엔진으로, 모질라재단이 만들었다. 하지만 라이노도 몇 가지 제약이 있었다고 판단한 그때, 우연히 한 자바스크립트 컨퍼런스에서 노드JS 개념을 발표한 걸 듣게 된다.</p>

<p>
	<br>
</p>

<p>&ldquo;노드JS 컨셉트를 듣자마자 &lsquo;이게 바로 내가 필요한 기술이야&rsquo;라는 생각이 들더군요. 그때 당시 저희 회사에서는 윈도우 시스템에 맞게 기술을 가져와야 했고, 그때 노드JS 기술을 조금씩 만지고 코드 기여를 했습니다. 그러고 나니 주변에서 노드JS 관련 작업을 제안하는 기업이 나타났고요. 그때부터 노드JS 개발자로 활동했습니다. 이전에도 오픈소스 기술을 사용하곤 했지만, 노드JS 개발자로 활동하면서 본격적으로 오픈소스 커뮤니티에 기여하는 개발자가 됐죠.&rdquo;</p>

<p>
	<br>
</p>

<p>Bert_Belder_04</p>

<p>
	<br>
</p>

<p>현재 노드JS의 안정성은 어느 정도 성숙됐을까. 버트 벨더 개발자는 2가지 측면을 언급하면서 노드JS 기술이 충분히 안정됐다고 설명했다. 먼저 노드JS재단이 설립되며 개발 과정이 체계적으로 변하고 누군가 마음대로 기능을 고칠 수 없는 구조를 가지게 됐다. 개발 과정이 안정화된 것은 대형 기업에 큰 의미가 있다고 한다.</p>

<p>
	<br>
</p>

<p>두 번째는 다른 기술과 얼마나 잘 어울릴 수 있는지에 대한 부분이다. 버트 벨더는 많은 것을 연결해야 하는 기술에서 노드JS 기술이 큰 빛을 발할 것이라고 설명했다. 대신, 기술 성숙도와 상관없이 기업 스스로 노드JS를 어디에, 왜 써야 하는지 고민을 많이 해야 한다고 조언했다. 기존의 것을 대체하는 수준으로 노드JS를 도입한다면 별 효과가 없을 것이라고 본 것이다.</p>

<p>
	<br>
</p>

<p>&ldquo;노드JS와 같은 새로운 기술을 도입하고 싶다면 아키텍처의 큰 흐름을 먼저 정해야 할 것입니다. 다행히 노드JS는 미래지향적인 기슬입니다. 요즘 화두가 되는 인터넷, 디바이스 연결에 쓰기 좋고, 사물인터넷(IoT), 마이크로서비스를 구현할 때도 좋습니다.&rdquo;</p>

<p>
	<br>
</p>

<p>버트 벨더는 노드JS가 쓰기에 어려운 분야도 일부 설명했다. 먼저 프로세서를 많이 사용하거나 수학적인 계산을 많이 필요로 하는 기술은 노드JS가 어울리지 않을 수 있다. 예를 들어 영상을 압축하거나 딥러닝 등을 위한 환경이다. 어떤 개발자는 확작성을 고려했을 때 노드JS는 적합하지 않다는 주장도 하는데, 버트 벨더는 이에 대해서는 부인했다. 확장성은 아키텍처와 관련된 부분이지 프로그래밍 언어에 영향을 많이 받는 게 아니기 때문이다. 그는 &ldquo;연결성이 높다는 점에서 노드JS도 충분히 확장성이 높은 기술이라고 본다&rdquo;라며 &ldquo;단지 모든 문제를 해결해줄 만큼 확장성이 좋다고 표현할 수는 없을 것&rdquo;이라고 말했다.</p>

<p>
	<br>
</p>

<p>빠르게 변하는 자바스크립트 생태계에서 살아남는 법</p>

<p>
	<br>
</p>

<p>자바스크립트 기술은 그 자체는 변하지 않지만 라이브러리와 생태계는 급변하고 있다. 6개월마나 새로운 자바스크립트가 혜성같이 등장하고, 주도권도 달라진다. 실제로 노드JS 외에 엠버, 앵귤라JS, 리액트JS, 미티어JS 등이 자바스크립트 업계에서 관심을 받고 있다. 이러한 상황에서 누군가는 &ldquo;어차피 지금 인기 있어도 나중에 사라질 기술&rdquo;이라는 걱정으로 자바스크립트 공부를 주저할 수도 있다. 하지만 버트 벨더 개발자는 &ldquo;서버단이나 프론트엔드 개발자이든 웹 개발자라면 자바스크립트는 무조건 공부해야 한다&rdquo;라고 말했다.</p>

<p>
	<br>
</p>

<p>&ldquo;저는 보통 5년 후 존재할 것 같은 기술은 일단 공부하려고 합니다. 이 기술이 10-20년 지속할지는 알기 쉽지 않죠. 하지만 5년 후에 존재할지 안할지는 어느정도 판단할 수 있습니다. 이를 위해선 먼저 커뮤니티 크기를 살펴봐야 합니다. 1-2명 기여자가 있는 기술은 아무래도 사라지기 쉽지만 기여자들이 20명 이상 있다면 그 기술은 5년 이상 버틸 수 있을 겁니다. 기업이 후원하는 기술들도 오랫동안 살아남을 가능성이 높죠. 기여자 스스로 해당 오픈소스 기술을 자신의 서비스에 적용하고 있느냐도 굉장히 좋은 지표가 됩니다. 그만큼 기여자나 관련 기업이 그 오픈소스 기술을 아주 중요하게 생각하고 투자하는 것일 테니까요. 마지막으로 운도 있으면 좋겠죠. (웃음) 그런 면에서 노드JS는 5년 이상 무조건 살아남을 수 있다고 보고 있습니다.&rdquo;</p>

<p>
	<br>
</p>

<p>Bert_Belder_02</p>

<p>▲버트 벨더 스트롱루프 공동 설립자. 노드JS 기여자로 활동하며 현재는 IBM에 소속돼 있다.(사진 : 한국IBM 제공)</p>

<p>스트롱루프와 IBM</p>

<p>
	<br>
</p>

<p>버트 벨더 개발자는 현재 IBM에 소속돼 있지만 이전에는 스트롱루프라는 노드JS 전문 스타트업 설립자로 활동했다. 지인에게 노드JS가 엔터프라이즈 쪽에서 관심을 많이 받을 것이라는 조언을 받고 기업용 노드JS를 만드는 스트롱루프를 설립하게 됐다고 한다. 마침 모바일과 사물인터넷이 화두여서 수요가 높았다고 한다. 그러다 스트롱루프는 2015년 IBM에 인수됐고, 스트롱루프 기술은 IBM API 커넥트로 변경됐다. 당시 스트롱루프 직원들은 더 성장하기 위해서 여러 자원이 필요하다고 생각해서 IBM과 함께 일하기로 결정했다고 한다. 버트 벨더 개발자는 &ldquo;은행과 같은 큰 기업은 작은 스타트업과 일하기 주저했다&rdquo;라며 &ldquo;규모가 있는 IBM 같은 기업과 일하면 고객군을 넓히는 데 도움이 될 것이라고 판단했다&rdquo;라고 피인수 배경을 밝혔다.</p>

<p>
	<br>
</p>

<p>Bert_Belder_05</p>

<p>
	<br>
</p>

<p>사실 IBM 같은 큰 기업에 스트롱루프가 인수되자, 스트롱루프의 오픈소스 기술 지원이 중단되고 페쇄적으로 운영되는 게 아니냐는 우려도 있었다. 이런 부분에 대해 오픈소스 기업이었던 스트롱루프에선 걱정이 없었을까. 버트 벨더 개발자는 &ldquo;IBM은 노드JS에 대해 여러 지원을 했던 기업이고, 인수 이전 1년 넘게 교류하고 좋은 관계를 유지했다&rdquo;라며 &ldquo;IBM에 인수된 이후 IBM도 이클립스, 도커, 자바 등 오픈소스 기술에 관심이 많고 투자를 많이 하고 있다는 것을 알았다&rdquo;라고 밝혔다. IBM에 합류한 이후에는 여러 나라의 요구사항을 함께 고려한다거나 기술의 성숙도를 고민하는 경우도 많아졌다고 한다.</p>

<p>
	<br>
</p>

<p>버트 벨더는 주로 노드JS를 공부하고 있긴 하지만 최근 그 외에 관심있는 기술이 몇몇 있다고 답했다. 딥러닝과 텐서플로우가 대표 사례다. 그는 &ldquo;인공지능이란 기술은 대단한 돌파구가 될 것&rdquo;이라며 &ldquo;얼굴인식 기술부터 &lsquo;딥드림&rsquo;처럼 무엇인가 창의적인 활동까지 가능할 기술&rdquo;이라고 기대를 표현했다. 또 다른 그의 관심사는 컨테이너다. 엔터프라이즈 분야에서 굉장히 큰 변화를 이끌 기술이라고 생각하고 관심을 갖고 있다고 밝혔다.</p>

<p>MVC 패턴의 이해</p>

<table style="width: 100%;">
	<tbody>
		<tr>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
		</tr>
		<tr>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
		</tr>
		<tr>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
		</tr>
		<tr>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
		</tr>
	</tbody>
</table>`,
};
mockObj[7] = {
	title: '최순실 주변 인사... :: 네이버 뉴스',
	tags: ['사회', '논쟁'],
	is_publish: false,
	data: `<p>이수빈 생활경제부 / 황정환 지식사회부 기자) &lsquo;최순실 게이트&rsquo; 파문이 거세지자 제일기획이 당황하고 있다. 사태를 둘러싼 인물 중 제일기획 출신이 여럿 포함돼 있기 때문이다. 최순실 세력이 영향력을 행사하는 정부 광고예산 집행 과정에서 제일기획 출신 광고대행사들이 특혜를 받았다는 의혹도 나오고 있다.</p>

<p>
	<br>
</p>

<p>국내 최대 광고대행사인 제일기획 출신 인사들은 업계에서 실력으로 인정받는 것은 사실이다. 그러나 광고업계에서는 현 정권 들어 이들이 지나친 특혜를 받았다는 목소리가 나온다. 광고업계 관계자는 &ldquo;현 정권 들어 제일기획 출신들이 높은 자리에 많이 올라갔다&rdquo;며 &ldquo;제일기획 사람들이 유능하지만 서로 선후배 지간이라 광고입찰이나 인사를 임명할 때 밀어주고 끌어준 것 아니냐는 얘기가 나온다&rdquo;고 전했다.</p>

<p>
	<br>
</p>

<p>◆포레카 인수압박한 김송김 3인방</p>

<p>
	<br>
</p>

<p>우선 포스코 계열 광고대행사 &lsquo;포레카&rsquo;를 인수하기 위해 독립 광고대행사를 압박했다는 의혹을 받고 있는 김홍탁 더플레이그라운드 대표와 송성각 전 한국콘텐츠진흥원장, 김영수 전 포레카 대표가 모두 제일기획 출신이다. 이들은 미르&middot;K스포츠재단 논란의 핵심으로 지목되는 차은택의 측근으로 알려졌다. 김홍탁 대표는 제일기획 마스터였던 2014년 회사를 나온 뒤 차은택 감독과 합작해 광고회사 더플레이그라운드와 모스코스를 각각 작년 1월과 2월 설립했다. 모스코스는 미르재단의 전신으로 지목되는 회사다. 차 감독이 운영하는 아프리카픽처스 직원들이 이곳에서 일했다.</p>

<p>
	<br>
</p>

<p>송 전 원장은 제일기획 상무를 거쳐 광고대행사 &lsquo;머큐리포스트&rsquo;를 운영하다 2014년 한국콘텐츠진흥원장 자리에 올랐다. 차 감독의 은사인 김종덕 전 문화체육관광부 장관이 송 전원장을 발탁했다. 머큐리포스트는 차 감독이 세운 &lsquo;엔박스에디트&rsquo;와 주소지가 같다. 광고계약을 여러 건 체결하기 위해 같은 주소지에 회사를 여러개 세운게 아니냐는 의혹이 나온다. 김영수 전 대표는 2014년 포스코 외부인사로는 처음으로 포레카 대표가 됐다. 이전까지 포레카 대표직은 포스코 출신 인사가 오르는 게 관행이었다. 김 전 대표는 포레카 인수 압박 과정에서 권오준 포스코 회장과 안종범 전 청와대 정책조정수석을 거론하며 컴투게더를 압박한 것으로 알려졌다.</p>

<p>
	<br>
</p>

<p>◆광고 수주 몰아줬나</p>

<p>
	<br>
</p>

<p>이들 3인방이 박근혜 정부 들어 수주한 현대자동차 KT 등 대기업과 정부광고는 300억원에 이르는 것으로 알려졌다. 대통령 아프리카 순방 행사, K스포츠가 참여한 이란 순방 때의 K스피릿 공연기획을 맡은 곳도 플레이그라운드다. KT가 올해 2~9월 시행한 광고의 절반 가량은 제일기획과 차은택이 담당했다. 아프리카픽처스는 KT 광고 24건 중 6건을 제작했다. 아프리카픽처스가 맡은 6건 중 5건은 제일기획이 대행했다. 플레이그라운드는 같은 기간 KT와 광고계약 5건을 체결했다. 아프리카픽처스는 작년 11월~올해 4월까지 방영된 금융위원회의 광고를 공개입찰없이 수의계약 방식으로 수주하기도 했다.</p>

<p>
	<br>
</p>

<p>더불어민주당 김병욱 의원실에 따르면 박근혜 정부들어 한국언론재단 정부광고 집행내역은 2010년 3957억원에서 2015년 5779억원으로 46% 뛰었다. 이명박 정부 시절에 비해서도 50% 증가했다. 광고 예산을 집행하면서 차은택 세력이 상당한 이득을 봤다는 주장도 있다. 한 광고대행사 직원은 &ldquo;지난 몇 년간 공기관 광고는 어차피 제일기획 출신끼리 해먹는다는 인식이 있어서 우리회사는 입찰에 참여도 안했다&rdquo;며 &ldquo;이번 사태를 계기로 정부 광고 입찰이 투명해지길 바란다&rdquo;고 했다.</p>

<p>
	<br>
</p>

<p>◆재외문화원장 직제규정 돌연 변경</p>

<p>
	<br>
</p>

<p>송 전 원장이 취임한 뒤 2016년 문화창조융합벨트 사업 예산 약 904억 중 760억원 정도가 콘진원에 들어갔다. 콘진원 예산은 전년보다 33.6% 늘어난 3310억원으로 책정됐다. 또 콘진원이 주도하는 평창 동계올림픽 LED 조명 45억원 규모 기술개발 사업자로 머큐리포스트가 주축이 된 빛샘전자 컨소시엄이 선정됐다.</p>

<p>
	<br>
</p>

<p>인사 논란도 있다. 제일기획 상무 출신인 오승제 뉴욕문화원장도 최순실&middot;차은택과 연관이 있는 것 아니냐는 의혹도 나왔다. 오 원장은 송 전 원장과 제일기획에서 함께 일하며 연을 맺은 것으로 알려졌다. 원래 임명직이었던 뉴욕문화원장 자리는 작년 7월 경력개방형직으로 바뀌었다. 이후 오 원장이 선발됐다.</p>

<p>
	<br>
</p>

<p>이밖에 안종범 전 수석의 딸인 안모씨(31)와 사위(31)도 제일기획에 근무 중이다. 안씨는 부친인 안 전 수석이 대통령직 인수위에 참여한 2013년 제일기획에 경력직으로 입사했다.</p>

<p>
	<br>
</p>

<p>친박인사로 분류되는 강영환 새누리당 수석부대변인도 제일기획 출신 홍보전문가다. 그는 국무총리실 공보실 공보협력비서관에 올랐다. 후임인 조창수 공보협력비서관은 제일기획 후배다. (끝) / lsb@hankyung.com</p>

<p>
	<br>
</p>

<p>
	<br>
</p>

<p>모바일한경는 PC&middot;폰&middot;태블릿에서 읽을 수 있는 프리미엄</p>

<p>MVC 패턴의 이해</p>

<table style="width: 100%;">
	<tbody>
		<tr>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
		</tr>
		<tr>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
		</tr>
		<tr>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
		</tr>
		<tr>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
		</tr>
	</tbody>
</table>`,
};
mockObj[8] = {
	title: '"내 생애 가장 위험한 대통령, 힐러리 클린턴"',
	tags: ['미국', '논쟁'],
	is_publish: false,
	data: `<h2>유승민 재벌에 다시 강펀치 &quot;창조혁신센터 손 떼라&quot;</h2>

<h3><span title="텍스트 음성 변환 서비스">본문듣기</span></h3>

<p><span title="텍스트 음성 변환 설정">설정</span></p>

<p>기사입력 2016.10.13 오후 6:49</p>

<p>최종수정 2016.10.13 오후 7:30</p>

<p>72</p>

<p>44</p>

<p>SNS 보내기</p>

<p>글자 작게보기글자 크게보기</p>

<p>[머니투데이 우경희, 세종=정현수, 박경담, 정혜윤 기자] [[the300]&quot;고양이에 생선 맡긴 격&quot;&hellip;&quot;미르&middot;K도 이런데 재벌에 맡기는 식은 안돼&quot;]</p>

<table>
	<tbody>
		<tr>
			<td><img src="https://i.froala.com/download/48aa785a7d29c1c70e0ffa9f4547e6e9365bbb31.?1498200201" class="fr-fic fr-dii">원본보기</td>
		</tr>
		<tr>
			<td>유승민 새누리당 의원이 12일 서울 여의도 국회에서 열린 기획재정위원회 국정감사에서 질의를 하고 있다. 2016.10.12/뉴스1 &lt;저작권자 &amp;#169; 뉴스1코리아, 무단전재 및 재배포 금지&gt;
				<br>
			</td>
		</tr>
	</tbody>
</table>

<p>
	<br>
</p>

<p>전국경제인연합(전경련)을 고사시킬 것을 제안했던 유승민 새누리당 의원이 재벌에 후속타를 날렸다. 박근혜 정부 중점 사업 중 하나인 창조경제혁신센터에서 대기업이 점차 손을 떼도록 해야 한다고 주장했다.</p>

<p>
	<br>
</p>

<p>유 의원은 13일 국회 기획재정위원회 종합국정감사에서 &quot;17개 시도가 창조경제혁신센터를 각각 재벌에 나눠주고 마치 대단한 성과를 낸 것 처럼 홍보하더라&quot;며 &quot;재벌의 기술탈취가 빈번한 상황에서 이는 고양이에 생선을 맡긴 격&quot;이라고 비판했다.</p>

<p>
	<br>
</p>

<p>유 의원은 이어 &quot;일단 재벌에 맡긴 창조경제혁신센터를 당장 어쩔 수는 없어도 현 정부 남은 기간 동안 조금씩 손을 떼도록 해야 한다&quot;며 &quot;이후 정부가 직접 플랫폼을 책임지고 운영하면서 창조&middot;벤처금융 쪽 문제점을 파악해야 한다. 그 다음에 개선할 문제점은 없는지 설명을 들어보고 싶다&quot;고 말했다.</p>

<p>
	<br>
</p>

<p>유 의원은 앞서 국감에서 야당을 중심으로 전경련 해체론이 제기되자 &quot;전경련은 발전적 해체 수순으로 가는 것이 옳으며 당장 없애기 어렵다면 정부가 전경련을 상대하지 않으면 자연스럽게 해체될 것&quot;이라고 밝힌 바 있다. 유 의원은 그러면서 &quot;왜 전경련이 금리를 논하고 왜 부총리가 전경련 회장과 골프를 치느냐&quot;고 질책하기도 했다.</p>

<p>
	<br>
</p>

<p>이날 유 의원의 창조경제혁신센터 재벌 배제 발언은 이 전경련 해체 발언의 연장선에서 해석된다. 유 의원은 &quot;창조경제에서 가장 중요한 것은 창업&middot;벤처금융인데 이게 각 기관 부처별로 나뉘어 있다 보니 규모도 제대로 파악이 안 된다&quot;며 &quot;이런 상황에서 각 시도가 삼성, 현대차, SK에 뚝뚝 나눠 맡겨 놓은 상황&quot;이라고 비판했다.</p>

<p>
	<br>
</p>

<p>유 의원은 이어 &quot;(창조경제혁신센터는) 대통령이 경제분야에서 제일 중요하다고 추진한 것 아니냐&quot;며 &quot;미르&middot;K스포츠 재단을 놓고도 이렇게 난리가 나는데 재벌에 주는 이런 식은 아니라고 본다&quot;고 지적했다.</p>

<p>
	<br>
</p>

<p>그는 &quot;옛날에 대기업 위주로 성장할 땐 관치금융을 대기업 위주로 했 듯 이제 창업벤처에 대해서 정부가 (금융정책을) 주도적으로 해야 할 역할이 있을 것&quot;이라며 &quot;지금 이 형태는 아니라는 생각이 드니 국회에서 관련 통계 등 개선할 부분이 있으면 보고해달라&quot;고 말했다.</p>

<p>
	<br>
</p>

<p>유일호 부총리 겸 기획재정부 장관은 &quot;내용을 파악해보고 보고하겠다&quot;고 답했다.</p>

<p>
	<br>
</p>

<p>
	<br>
</p>

<p><a href="http://tom.mt.co.kr/tomColumn.html">[이코노미스트들의 깊이있는 투자정보 &#39;TOM칼럼&#39;]</a><a href="http://www.mt.co.kr/column/opinion_list.html?code=column274">[부자들에게 배우는 성공 노하우 &#39;줄리아 투자노트&#39; ]</a><a href="http://the300.mt.co.kr/">[내 삶을 바꾸는 정치뉴스 &#39;the 300&#39;]</a></p>

<p>
	<br>
</p>

<p>우경희, 세종=정현수, 박경담, 정혜윤 기자 cheerup@mt.co.kr</p>

<p>
	<br>
</p>

<p>&lt;저작권자 ⓒ &#39;돈이 보이는 리얼타임 뉴스&#39; 머니투데이, 무단전재 및 재배포 금지&gt;</p>

<p><span title="공감해요">44</span></p>

<p>보내기</p>

<h3>
	<a href="http://www.mt.co.kr/"><img height="27" src="https://i.froala.com/download/9885ccd07ff2c822c991f01290a0ed7b195e2269.?1498200200" class="fr-fic fr-dii"></a>
	<br>주요뉴스해당 언론사에서 선정하며 언론사 페이지로 이동합니다</h3>

<p>&#39;세타2엔진&#39; 신형 그랜저 IG는? 현대차 &quot;풀 체인지&quot; 선긋기</p>

<p>삼성의 위기, 이병철&middot;이건희 회장이라면&hellip;</p>

<p>무전원 자동물내림?&hellip;&#39;양변기&#39;에 혁신을 입힌 남자</p>

<p>기부도 사업도 대(代) 이어&hellip;제2 앙드레김 양성의 꿈</p>

<p>&quot;김재수 장관처럼 금리 낮춰달라&quot; 고객 요구에 농협은행 &#39;진땀&#39;</p>

<p><a href="http://m.news.naver.com/main.nhn?mode=LSD&sid1=101">경제 기사</a>
	<a href="http://m.news.naver.com/main.nhn?mode=LSD&sid1=101">모아보기</a></p>

<p>MVC 패턴의 이해</p>

<table style="width: 100%;">
	<tbody>
		<tr>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
		</tr>
		<tr>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
		</tr>
		<tr>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
		</tr>
		<tr>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
		</tr>
	</tbody>
</table>`,
};
mockObj[9] = {
	title: '[제797호] “나를 바꿨듯 음악은 세상을 바꾼다” : 표지이야기 : 뉴스 : 한겨레21',
	tags: ['음악', '톰모렐로', '영감', '도전'],
	is_publish: false,
	data: `<p><img src="http://img.hani.co.kr/section-image/08/h21/left_menu01_title.gif" class="fr-fic fr-dii"></p>

<table border="0" cellpadding="0" cellspacing="0">
	<tbody>
		<tr>
			<td>
				<br>
				<br>
			</td>
		</tr>
		<tr>
			<td><a href="http://h21.hani.co.kr/arti/cover/">- 표 지 이 야 기</a>
				<br>
			</td>
		</tr>
		<tr>
			<td>
				<br>
				<br>
			</td>
		</tr>
		<tr>
			<td><a href="http://h21.hani.co.kr/arti/special/">- 특 집</a>
				<br>
			</td>
		</tr>
		<tr>
			<td>
				<br>
				<br>
			</td>
		</tr>
		<tr>
			<td><a href="http://h21.hani.co.kr/arti/politics/">- 정 치</a>
				<br>
			</td>
		</tr>
		<tr>
			<td>
				<br>
				<br>
			</td>
		</tr>
		<tr>
			<td><a href="http://h21.hani.co.kr/arti/economy/">- 경 제</a>
				<br>
			</td>
		</tr>
		<tr>
			<td>
				<br>
				<br>
			</td>
		</tr>
		<tr>
			<td><a href="http://h21.hani.co.kr/arti/society/">- 사 회</a>
				<br>
			</td>
		</tr>
		<tr>
			<td>
				<br>
				<br>
			</td>
		</tr>
		<tr>
			<td><a href="http://h21.hani.co.kr/arti/world/">- 세 계</a>
				<br>
			</td>
		</tr>
		<tr>
			<td>
				<br>
				<br>
			</td>
		</tr>
		<tr>
			<td><a href="http://h21.hani.co.kr/arti/SERIES/">- 기 획 연 재</a>
				<br>
			</td>
		</tr>
		<tr>
			<td>
				<br>
				<br>
			</td>
		</tr>
		<tr>
			<td><a href="http://h21.hani.co.kr/arti/THEME/">- 기 사 묶 음</a>
				<br>
			</td>
		</tr>
		<tr>
			<td>
				<br>
				<br>
			</td>
		</tr>
		<tr>
			<td>
				<br>
				<br>
			</td>
		</tr>
	</tbody>
</table>

<table border="0" cellpadding="0" cellspacing="0">
	<tbody>
		<tr>
			<td>

				<table border="0" cellpadding="0" cellspacing="0">
					<tbody>
						<tr>
							<td>

								<table border="0" cellpadding="0" cellspacing="0">
									<tbody>
										<tr>
											<td>
												<br>
												<br>
											</td>
										</tr>
										<tr>
											<td><img src="http://img.hani.co.kr/section-image/08/h21/blet_arr.gif" class="fr-fic fr-dii">[표지이야기] 인기글
												<br>
											</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
						<tr>
							<td>
								<br>
								<br>
							</td>
						</tr>
					</tbody>
				</table>
			</td>
		</tr>
		<tr>
			<td>

				<table border="0px" cellpadding="0px" cellspacing="0px">
					<tbody>
						<tr>
							<td>
								<br>
								<br>
							</td>
						</tr>
						<tr>
							<td>&bull;<img src="http://img.hani.co.kr/section-image/05/news2/space.gif" class="fr-fic fr-dii"><a href="http://h21.hani.co.kr/arti/cover/cover_general/35990.html">&lsquo;대선불복&rsquo;은 생각하지마</a>
								<br>
							</td>
						</tr>
						<tr>
							<td>
								<br>
								<br>
							</td>
						</tr>
						<tr>
							<td>&bull;<img src="http://img.hani.co.kr/section-image/05/news2/space.gif" class="fr-fic fr-dii"><a href="http://h21.hani.co.kr/arti/cover/cover_general/34199.html">&ldquo;선입견을 법의학자가 뒷받침&rdquo; vs &ldquo;법..</a>
								<br><img src="http://img.hani.co.kr/section-image/05/news2/space.gif" class="fr-fic fr-dii">
								<br>&bull;<img src="http://img.hani.co.kr/section-image/05/news2/space.gif" class="fr-fic fr-dii"><a href="http://h21.hani.co.kr/arti/cover/cover_general/36018.html">그런 자기반성은 일기에나 하시지</a>
								<br><img src="http://img.hani.co.kr/section-image/05/news2/space.gif" class="fr-fic fr-dii">
								<br>&bull;<img src="http://img.hani.co.kr/section-image/05/news2/space.gif" class="fr-fic fr-dii"><a href="http://h21.hani.co.kr/arti/cover/cover_general/35797.html">토익의 신이여 강림하소서</a>
								<br><img src="http://img.hani.co.kr/section-image/05/news2/space.gif" class="fr-fic fr-dii">
								<br>&bull;<img src="http://img.hani.co.kr/section-image/05/news2/space.gif" class="fr-fic fr-dii"><a href="http://h21.hani.co.kr/arti/cover/cover_general/29194.html">그들의 성에서 그녀는 악마를 보았다</a>
								<br><img src="http://img.hani.co.kr/section-image/05/news2/space.gif" class="fr-fic fr-dii">
								<br>
							</td>
						</tr>
					</tbody>
				</table>
			</td>
		</tr>
		<tr>
			<td>
				<br>
				<br>
			</td>
		</tr>
	</tbody>
</table>

<table border="0" cellpadding="0" cellspacing="0">
	<tbody>
		<tr>
			<td>
				<br>
				<br>
			</td>
		</tr>
	</tbody>
</table>

<p>
	<br>
</p>

<p>
	<a href="http://h21.hani.co.kr/arti/HO/"><img src="http://img.hani.co.kr/imgdb/resize/2013/1217/138717065078_20131217.JPG" class="fr-fic fr-dii"></a>
</p>

<p>
	<br>
</p>

<table border="0" cellpadding="0" cellspacing="0">
	<tbody>
		<tr>
			<td>제 991호
				<br>2013.12.23
				<br>
			</td>
		</tr>
		<tr>
			<td>
				<br>
				<br>
			</td>
		</tr>
		<tr>
			<td>
				<a href="http://h21.hani.co.kr/arti/HO/"><img src="http://img.hani.co.kr/section-image/08/h21/blet_more.gif" class="fr-fic fr-dii"></a>
				<br>
			</td>
		</tr>
		<tr>
			<td>
				<a href="http://h21.hani.co.kr/arti/SUBSCRIPTION/"><img src="http://img.hani.co.kr/section-image/10/h21/btn_left_01.gif" class="fr-fic fr-dii"></a><img src="http://img.hani.co.kr/section-image/08/h21/blank.gif" class="fr-fic fr-dii">
				<a href="http://h21.hani.co.kr/arti/SALES/"><img src="http://img.hani.co.kr/section-image/10/h21/btn_left_02.gif" class="fr-fic fr-dii"></a>
				<br>
			</td>
		</tr>
		<tr>
			<td>
				<br>
				<br>
			</td>
		</tr>
		<tr>
			<td>
				<a href="http://h21.hani.co.kr/arti/HO_PAST/"><img src="http://img.hani.co.kr/section-image/10/h21/btn_left_03.gif" class="fr-fic fr-dii"></a><img src="http://img.hani.co.kr/section-image/08/h21/blank.gif" class="fr-fic fr-dii">
				<a href="http://pdf.hani.co.kr/newspdf/hani21List.ez"><img src="http://img.hani.co.kr/section-image/10/h21/btn_left_04.gif" class="fr-fic fr-dii"></a>
				<br>
			</td>
		</tr>
	</tbody>
</table>

<p>
	<br>
</p>

<table border="0" cellpadding="0" cellspacing="0">
	<tbody>
		<tr>
			<td>

				<table border="0" cellpadding="0" cellspacing="0">
					<tbody>
						<tr>
							<td>
								<br>
								<br>
							</td>
						</tr>
						<tr>
							<td>
								<br>
							</td>
						</tr>
					</tbody>
				</table>
			</td>
		</tr>
	</tbody>
</table>

<p>
	<br>
</p>

<table border="0" cellpadding="0" cellspacing="0">
	<tbody>
		<tr>
			<td>
				<br>
				<br>
			</td>
		</tr>
	</tbody>
</table>

<p>
	<br>
</p>

<p><a href="http://h21.hani.co.kr/">HOME</a> &gt; <a href="http://h21.hani.co.kr/arti/NEWS/">뉴스</a> &gt; <a href="http://h21.hani.co.kr/arti/cover/">표지이야기</a> &gt; <a href="http://h21.hani.co.kr/arti/cover/cover_general/">표지이야기일반</a></p>

<p>
	<br>
</p>

<p>
	<br>
</p>

<p>
	<br>
</p>

<p>&ldquo;나를 바꿨듯 음악은 세상을 바꾼다&rdquo; [2010.02.05 제797호]</p>

<p>
	<br>
</p>

<p>&lsquo;레이지 어게인스트 더 머신&rsquo;의 세계적 기타리스트 톰 모렐로,</p>

<p>한국 노동자를 위해 직접 작곡한 노래 선보여</p>

<p>
	<br>
</p>

<p>
	<br>
</p>

<p>
	<br>
</p>

<p>▣ 임인택
	<a href="http://blog.hani.co.kr/imit/"><img src="http://img.hani.co.kr/section-image/05/news2/btn_giljin.gif" class="fr-fic fr-dii"></a>
</p>

<p><img src="http://img.hani.co.kr/section-image/05/news2/btn_back.gif" class="fr-fic fr-dii">&nbsp;<img src="http://img.hani.co.kr/section-image/05/news2/btn_ermail.gif" class="fr-fic fr-dii">&nbsp;<img src="http://img.hani.co.kr/section-image/05/news2/space.gif" class="fr-fic fr-dii">&nbsp;<img src="http://img.hani.co.kr/section-image/05/news2/btn_print0.gif" class="fr-fic fr-dii">&nbsp;<img src="http://img.hani.co.kr/section-image/05/news2/space.gif" class="fr-fic fr-dii">&nbsp;<img src="http://img.hani.co.kr/section-image/05/news2/btn_text0.gif" class="fr-fic fr-dii"><img src="http://img.hani.co.kr/section-image/05/news2/space.gif" class="fr-fic fr-dii"><img src="http://img.hani.co.kr/section-image/05/news2/btn_textbig0.gif" class="fr-fic fr-dii"><img src="http://img.hani.co.kr/section-image/05/news2/space.gif" class="fr-fic fr-dii"><img src="http://img.hani.co.kr/section-image/05/news2/btn_textsmall0.gif" class="fr-fic fr-dii">&nbsp;<img src="http://img.hani.co.kr/section-image/05/news2/space.gif" class="fr-fic fr-dii"><img src="http://img.hani.co.kr/section-image/05/news2/btn_scrap.gif" class="fr-fic fr-dii"><img src="http://img.hani.co.kr/section-image/05/news2/space.gif" class="fr-fic fr-dii"></p>

<p><img src="http://img.hani.co.kr/section-image/05/news2/space.gif" class="fr-fic fr-dii"><img src="http://img.hani.co.kr/section-image/05/news2/btn_send_01.gif" class="fr-fic fr-dii">
	<a href="http://h21.hani.co.kr/arti/cover/cover_general/26699.html#"><img src="http://img.hani.co.kr/section-image/05/news2/btn_send_02.gif" class="fr-fic fr-dii"></a><img src="http://img.hani.co.kr/section-image/05/news2/btn_send_04.gif" class="fr-fic fr-dii"></p>

<p>&nbsp;<img src="http://img.hani.co.kr/section-image/10/news/btn2_me2day.gif" class="fr-fic fr-dii"></p>

<p>&nbsp;<img src="http://img.hani.co.kr/section-image/10/news/btn2_twitter.gif" class="fr-fic fr-dii"></p>

<p>&nbsp;<img src="http://img.hani.co.kr/section-image/10/news/btn2_gonggam.gif" class="fr-fic fr-dii"></p>

<p>&nbsp;<img src="http://img.hani.co.kr/section-image/10/news/btn2_facebook.gif" class="fr-fic fr-dii"></p>

<p>
	<br>
</p>

<p>
	<br>
</p>

<p>그처럼 신념에 가득 찬 &lsquo;가수&rsquo;를 본 적이 없다. 한국의 예술인은커녕 정치인도 그를 흉내내기 어려워 보인다. 한국은 그래서 불운하다는 사대주의마저 스멀거린다. &lsquo;개념 예술인&rsquo;의 부재를 넘어, 그런 가수를 빌보드 차트 1위에도 올리는 풍토에 주억댄다.</p>

<p>음악에 문외한인 한국의 사회부 기자는 당황한다. 세계적 기타리스트와 단독 인터뷰를 하면서 전혀 애로가 없다. 음악까지 굳이 이해할 필요가 없었다. 음악과 삶, 그리고 군살 없이 직조하는 그의 언어들이 하나인 덕분이다. 랩 메탈의 대표주자 &lsquo;레이지 어게인스트 더 머신&rsquo;(RATM&middot;Rage Against The Machine)의 리더, 톰 모렐로(46)다. 평단은 그를 &lsquo;행동주의 음악가&rsquo;라 이른다. 연예인으로서 &lsquo;반경&rsquo;을 좁히는 건 아닐까. 하지만 그는 아예 자신을 &ldquo;급진 좌파&rdquo;라고 몰아세운다.</p>

<p>포털을 검색하면 &ldquo;그의 공연을 직접 보는 게 꿈&rdquo; &ldquo;창의적 기타리스트&rdquo; 따위 한국 팬들의 글들이 즐비하다. 그런 그가 150명가량 모인, 미국 로스앤젤레스(LA) 한인타운의 한 시민단체 강당을 찾았다. 지난 1월13일 저녁 7시께다. 콜트&middot;콜텍 해고 노동자들의 복직투쟁을 응원하기 위해서다.</p>

<p>-한국 노동자들을 지지하기로 한 이유가 궁금하다.</p>

<p>=한국 공장에서 정의와 존엄성을 지키려고 하기 때문이다. 이 사건을 접했을 때, 펜더 같은 여러 미국 브랜드의 기타들이 실제로는 한국에서 만들어졌다는 것에 놀랐다. 몇 주간 속성으로 공부를 했다. 미국에서 기타를 치는 대중이 알아야 할 사실이다. 나 같은 음악가는 메시지를 확대할 수 있다. 이런 중요한 문제들에 대한 실마리를 제공해준 한국 노동자들이 용감하다고 생각한다.</p>

<p>-노동착취 등에 대한 사실도 아는가.</p>

<p>=다국적기업, 부자기업이 이른바 &lsquo;밑바닥 경주&rsquo;(race to the bottom)를 벌이고 있다. 더 높은 노동자 권리나 환경보호 기준을 요구하는 나라를 떠나, 저임금에 노동자 권리나 작업환경 기준이 열악한 곳으로 옮겨가는 것이다. 콜트&middot;콜텍도 딱 그 경우다. 우리는 이걸 멈추고자 한다.</p>

<table border="0" cellpadding="0" cellspacing="0">
	<tbody>
		<tr>
			<td>
				<br>
				<br>
			</td>
			<td>

				<table border="0" cellpadding="0" cellspacing="0">
					<tbody>
						<tr>
							<td><img src="http://img.hani.co.kr/imgdb/resize/2010/0208/1265251561_6000396723_20100208.JPG" class="fr-fic fr-dii">
								<br>
							</td>
						</tr>
						<tr>
							<td>
								<br>
								<br>
							</td>
						</tr>
					</tbody>
				</table>

				<table border="0" cellpadding="0" cellspacing="0">
					<tbody>
						<tr>
							<td>&raquo; 톰 모렐로
								<br>
							</td>
						</tr>
						<tr>
							<td>
								<br>
								<br>
							</td>
						</tr>
					</tbody>
				</table>
			</td>
			<td>
				<br>
				<br>
			</td>
		</tr>
		<tr>
			<td colspan="3">
				<br>
				<br>
			</td>
		</tr>
	</tbody>
</table>

<p>-그러나 노동자들로선 점점 더 권리를 주장하기 쉽지 않은 상황인데.</p>

<p>=난 한국 노동자들과 연대한다는 뜻을 밝히려 왔다. 기타는 자유를 표현하는 도구이지 착취의 수단이 아니다. 이번 투쟁은 국제적이다. 우리는 깊이 연관돼 있다. 여기 오는 것만으로 한국 노동자들이 중요한 한 발을 내디뎠다고 본다. 안 그러면 나도, 펜더도 이 문제를 알았을까. 여러 기타 소비자들도 몰랐을 것이다. 다국적기업이 세계적 수준에서 우리를 착취하려 든다면, 우리도 세계적 수준에서 맞서야 한다.</p>

<p>모렐로의 언어는 대개 &ldquo;나&rdquo;(I) 대신 &ldquo;우리&rdquo;(We)로 시작됐다. 그러면서 &ldquo;한국 노동자들은 이제 무시당하지 않을 것&rdquo;이라고 말했다. 제 존재를 우쭐대는 게 아니다. 당장 해결을 호언하는 것이 아니다. 끝을 함께 지켜볼 &lsquo;동무&rsquo;로 있겠다는 약속이다.</p>

<p>-노동자들이 결국 펜더 같은, 콜트에 주문생산을 하는 업체를 직접 압박하게 된다. 누군가는 부당하다고 할 수도 있을 것이다.</p>

<p>=이틀 전(1월11일) 펜더 관계자와 직접 얘기했다. 노동자들의 요구가 타당하고, 사회정의 차원에서 앞장서려면 이 사건을 바로 조사해야 한다고 말했다. 우리가 콜트&middot;콜텍에서 만든 펜더&middot;깁슨&middot;아이바네즈(일본 브랜드) 등의 기타를 사지 말자고 주장하면, 많은 음악인과 젊은이들이 영향을 받을 거다. 기업들이 책임감을 가져야 하는 이유다.</p>

<p>-불매운동을 말하는 건가.</p>

<p>=일터에서 정의를 쟁취하지 못한다면, 콜트&middot;콜텍은 물론 그들과 사업을 하는 업체에 대해서도 불매운동을 펼칠 것이다. 펜더는 물론 다른 브랜드의 책임자와도 (관계가 있다면) 기꺼이 얘기할 거다. 펜더는 이 이슈를 알지 못했다. 하지만 (사태를 안) 이후에도 일이 잘 전개되지 않으면 무지의 대가를 깨닫게 될 것이다. 아주 큰 (미국) 국내 문제로 발전할 테니까. 단, 이런 운동은 노동자들이 추진하는 게 중요하다. 펜더나 아이바네즈에 무엇을 원하는지 분명히 해야 한다. 그럼 우린 이런 요구사항을 기꺼이 제안해주고, 그 책임을 물을 것이다.</p>

<p>실제 펜더는 법률 자문과 홍보 책임자를 내보내 지난 1월17일 오후 1시 콜트&middot;콜텍 해고 노동자들과 만났다. 1시간30분 동안의 긴 대화가 이뤄졌다. 이들은 &ldquo;이 자리를 기점으로 진상 조사가 시작된 것&rdquo;이라고 말했다.</p>

<p>-콜트&middot;콜텍 경영진을 직접 만나볼 의향은 없는가.</p>

<p>=이 싸움에서 내가 갖는 강점이 있다. 내가 콜트와도 대화할 순 있지만, 그들이 신경을 쓸지 모르겠다. 그러나 펜더는 (나와 같이) 펜더를 연주하는 이들이 펜더를 사지 말자고 하면 창피해할 것이다.</p>

<p>-다른 예술인들의 사회적 관심은 적다.</p>

<p>=모르기 때문일 수도 있다. 동료들에게 콜트 문제를 얘기하니 다들 관심을 보였다. 자기 기타는 &lsquo;착취 공장&rsquo;(sweatshop)에서 만들어진 게 아닌지 확인하고 싶어했다.</p>

<p>-예술가들이 사회문제에 관심을 갖긴 해야 할까.</p>

<p>=내가 할 말은 아니다. 난 관심을 갖는다. 예술가들에게 단 하나의 책임이 있다면, 그건 자신의 작품에 진실해야만 한다는 사실이다. 진실로 느끼지 못하는 사안에 대해 관심 있는 척해야 한다고 보진 않는다. 반면 평화든 환경이든 노동자 이슈든 간에, 관심이 있다면 예술과 행동으로 표현해야 한다.</p>

<p>-처음 기타를 손에 쥔 때를 기억하나.</p>

<p>=(웃으며) 13살 때다. 50달러짜리 케이 기타를 선물받았다. 엄청 흥분했는데, 50달러짜리 앰프에 연결했지만 전혀 연주할 수가 없었다. 폴 매카트니의 &lt;리브 앤드 렛 다이&gt;(Live and Let Die)를 치려고 했는데, 그냥 줄을 튕기는 수준이었다. &lsquo;두두두, 두두둣, 두두&rsquo; 소리를 내려고 했는데, 그냥 &lsquo;앙앙&rsquo; 소리만 났다. 그게 첫 번째 연주였다.</p>

<p>-그냥 스크래치 아닌가.</p>

<p>=하하하, 소음이었다.</p>

<p>-당신에게 기타와 음악은 뭔가.</p>

<p>=난 기타를 선택하지 않았다. 기타가 나를 선택했다. 나는 내 신념을 예술로 엮어가야 할 의무를 느낀다. 음악은 세상을 바꾼다. 내 세상부터 바꿨다. 오늘 밤, 이곳 LA에서도 음악은 세상을 바꿀 것이다. 음악가들은 세상을 더 정의롭고 공정한 곳으로 만들기 위해 노력할 거다.</p>

<p>모렐로에게 어떻게 &lsquo;진보주의자&rsquo;가 되었느냐고 묻자, 그는 &ldquo;(진보보다) 왼쪽으로 더 더&rdquo;라고 말하며 크게 웃었다. 그러곤 어머니 메리 모렐로를 가리켰다. 이탈리아계 여성운동가다. 케냐의 독립전쟁을 이끈 은게테 은요로게가 모렐로의 아버지다. &lsquo;좌파 유전자&rsquo;란 게 있다면 모렐로의 몸속에서 찾을 수 있을 것이다. 흑인계 혼혈이라는 &lsquo;출신&rsquo;과 하버드대 사회학과 졸업이란 &lsquo;성분&rsquo;이 유전자를 더 단련시켰다.</p>

<p>그의 언어는 중량감으로 넘쳤다. &ldquo;(이런 성장 배경 덕분에) 사다리 맨 밑에 위치한 이들 편에 서는 것이 나의 정치적 지표가 되었다. 사회 변화를 이끄는 음악을 만들 수 있길 열망한다.&rdquo;</p>

<p>인터뷰가 끝나자마자 시민단체 강당으로 내려가 기타를 쥐었다. 한국 노동자들을 위해 직접 작곡해서 왔다는 노래를 맨 먼저 선보였다. &lt;월드와이드 레벨 송&gt;(Worldwide Rebel Song)이었다. 취지를 미리 비쳤다. &ldquo;한국이건, 아이티건, LA건 타인을 위해 타인과 함께해야 혼자일 때보다 목표를 이룰 가능성이 크다는 내용이다.&rdquo;</p>

<p>실제 이날 공연에 모렐로는 물론 미국의 유명 가수 부츠 릴리, 웨인 크레이머 등이 참석했다. 해고 노동자들을 돕겠다며 팔을 걷어붙인 재미동포들, 그들의 다국적 친구들, 히스패닉, 아시아 노동자도 끼어 있었다. 터무니없이 작지만, 가장 국제적인 무대였다. LA 웨스트 8번가 3465번지에서 걸목 없는 지구 노동자의 세계 여행은 밤 12시가 넘도록 위무를 받았다.</p>

<p>MVC 패턴의 이해</p>

<table style="width: 100%;">
	<tbody>
		<tr>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
		</tr>
		<tr>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
		</tr>
		<tr>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
		</tr>
	`,
};
mockObj[10] = {
	title: "관광 코리아! 이대론 안된다] 먹거리·팔거리·놀거리·볼거리 없는 '4無 한국 관광'",
	tags: ['한국', '중국'],
	is_publish: false,
	data: `<h3>관광 코리아! 이대론 안된다] 먹거리&middot;팔거리&middot;놀거리&middot;볼거리 없는 &#39;4無 한국</h3>

<p>
	<br>
	<br>&#39;새로움&#39; 이 부족한 한국
	<br>프랑스 샤토 라 코스테 와이너리&hellip;일본 건축가 안도 다다오가 설계
	<br>호수위 거대한 거미작품 보러 전세계에서 관광객 몰려들어
	<br>
	<br>&#39;돈 쓸 곳&#39;이 없는 한국
	<br>알프스 몽블랑 둘레길 곳곳에 관광객 지갑 열게 하는 식당&middot;카페
	<br>융프라우 등반철도 요금만 23만원&hellip;한국은 국립공원도 &#39;공~짜&#39;
	<br>
	<br>&#39;즐길 것&#39; 이 없는 한국
	<br>뉴욕 브로드웨이&middot;중국 인상 여강&hellip;공연산업 &#39;관광 상품화&#39;로 대박</p>

<p>
	<br>
</p>

<p>
	<br>
</p>

<p>[ 정종태 기자 ]</p>

<p><img src="https://i.froala.com/download/9bd12fd330fb1ed520f2ac4e4d606f3376e03853.?1498200289" class="fr-fic fr-dii">원본보기</p>

<p>관광산업의 무한한 잠재력</p>

<p>
	<br>
</p>

<p>다음으로 외국 관광객 유치 가능성을 짚어 보자. 인구 대국인 중국의 옆에 붙어 있는 것은 우리에게 엄청난 기회다. 2015년 한 해 국내를 찾은 전체 외국인 관광객은 1323만명, 그중 중국 관광객만 598만명에 달했다. 그런데 이런 속도라면 중국인 1인당 한 번씩 한국에 관광을 오는 데에 216년이 걸린다. 15세에서 65세까지를 관광을 다니는 기간으로 가정하고 50평생에 1인당 한 차례씩 한국에 관광을 오게 한다는 극히 소박한 목표만 달성해도 1년에 2750만명이 와야 한다.</p>

<p>
	<br>
</p>

<p>물론 빈약한 관광자원을 감안할 때 좀 어려운 일이라고 생각된다. 하지만 우리 국민이 일생에 중국 관광을 가는 비율(1인당 평균 4.4회)만큼 중국인들을 한국에 오게 할 수만 있다면 1년에 1억2000만명 이상의 중국 관광객을 유치할 수 있다는 결론에 도달한다.</p>

<p>
	<br>
</p>

<p>작년에 중국 이외의 다른 나라에서 유치한 관광객이 725만명이었다. 이를 두 배만 늘려도 1500만명 유치할 수 있다. 이런 점들을 종합적으로 감안할 때 우리는 일단 10년 내에 5000만명 관광객 유치를 목표로 삼아야 한다.</p>

<p>
	<br>
</p>

<p>환골탈태의 시작은 냉엄한 현실인식과 반성에서 출발해야 한다. 우리는 그랜드캐니언도 없고 장자제도 없다. 이구아수폭포도, 나이아가라폭포도 없다. 자금성도 없고, 베르사유궁전도, 피라미드도 없다. 큐가든도, 위즐리가든도 없다. 세계적인 박물관이나 미술관이 있는 것도 아니다. 그렇다고 새로 만들기라도 하느냐 하면 그것도 아니다.</p>

<p>
	<br>
</p>

<p>칸, 니스, 모나코 등 유명 관광</p>

<p>MVC 패턴의 이해</p>

<table style="width: 100%;">
	<tbody>
		<tr>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
		</tr>
		<tr>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
		</tr>
		<tr>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
		</tr>
		<tr>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
		</tr>
	</tbody>
</table>`,
};
mockObj[11] = {
	title: '[허문명의 프리킥]“트럼프 미친 게 아니라 지극히 정상”',
	tags: ['트럼프', '미국', '논쟁'],
	is_publish: false,
	data: `<p>[허문명의 프리킥]&ldquo;트럼프 미친 게 아니라 지극히 정상&rdquo; <a href="http://news.donga.com/3/all/20160930/80557127/1#replyLayer">댓글보기</a>16</p>

<p>허문명 논설위원&nbsp;</p>

<p>입력&nbsp;2016-09-30 03:00:00&nbsp;수정&nbsp;2016-09-30 11:13:42</p>

<p>
	<a href="http://news.donga.com/Series/70070000001026"><img width="260" height="100" name="en-media:image/jpeg:215e22e0b40e78d397666eb51149fc82:none:none" src="https://i.froala.com/download/683d6a63f84de4f7188872f7f8448c558846a5e8.?1498200342" class="fr-fic fr-dii"></a>
	<br>
</p>

<p>
	<a href="http://news.donga.com/3/all/20160930/80557127/1#"><img width="14" height="14" name="en-media:image/gif:87616f63f074905b926a24424043f85e:none:none" src="https://i.froala.com/download/094d7e1f08e71f0416ec064451c5a2082c527509.?1498200343" class="fr-fic fr-dii"></a>
	<br>
	<a href="http://news.donga.com/3/all/20160930/80557127/1#"><img width="15" height="14" name="en-media:image/gif:dd7fcf258be5c4f48906f7011d89a708:none:none" src="https://i.froala.com/download/8162f882815baf7f55a698537d5e4d63f0badee5.?1498200343" class="fr-fic fr-dii"></a>
	<br>
</p>

<p>|</p>

<p>폰트<img name="en-media:image/gif:45853fa6a6a2f27ae5b1335e281fa57d:none:none" src="https://i.froala.com/download/9606f58accf640cde63e0b0d046e462209f256dd.?1498200343" class="fr-fic fr-dii"><img name="en-media:image/gif:16883f1d08df155edba122b48ec803d2:none:none" src="https://i.froala.com/download/fde40339976bd0c20445373833035f6a5296bb34.?1498200343" class="fr-fic fr-dii"></p>

<p>|</p>

<p>뉴스듣기여성남성</p>

<p>|</p>

<p><img width="19" height="19" name="en-media:image/gif:f3452083053b95c2623427ed19c39a40:none:none" src="https://i.froala.com/download/fd1cc957506d8ab16ee135229b4b034ddfb3d6eb.?1498200343" class="fr-fic fr-dii"></p>

<p>프린트이메일</p>

<p>기사공유 |&nbsp;</p>

<p>
	<a href="http://news.donga.com/3/all/20160930/80557127/1#"><img name="en-media:image/gif:1c36d8ea5fde0ce69a938ca5e19d9289:none:none" src="https://i.froala.com/download/9124417af65147929a02c4374d9e978530ac697e.?1498200343" class="fr-fic fr-dii"></a>
	<br>
</p>

<p>
	<a href="http://twitter.com/share?text=%5B%ED%97%88%EB%AC%B8%EB%AA%85%EC%9D%98%20%ED%94%84%EB%A6%AC%ED%82%A5%5D%E2%80%9C%ED%8A%B8%EB%9F%BC%ED%94%84%20%EB%AF%B8%EC%B9%9C%20%EA%B2%8C%20%EC%95%84%EB%8B%88%EB%9D%BC%20%EC%A7%80%EA%B7%B9%ED%9E%88%20%EC%A0%95%EC%83%81%E2%80%9D%20%3A%20%EB%8F%99%EC%95%84%EB%8B%B7%EC%BB%B4"><img name="en-media:image/gif:86ef4d1b0a8193dbf0210ecdbd9db93b:none:none" src="https://i.froala.com/download/c2017f73b961ff3bc80727212516a85ec627aa2a.?1498200343" class="fr-fic fr-dii"></a>
	<br>
</p>

<p>
	<a href="http://news.donga.com/3/all/20160930/80557127/1#"><img name="en-media:image/gif:d30e61f995c340d7ecbd18c5a2585d25:none:none" src="https://i.froala.com/download/fa67d6e6514aaf6510481cd6a362582219b4c79d.?1498200343" class="fr-fic fr-dii"></a>
	<br>
</p>

<p>
	<a href="http://news.donga.com/3/all/20160930/80557127/1#"><img name="en-media:image/gif:d3e3fa5972be6b2b474ec4c0cc52fc01:none:none" src="https://i.froala.com/download/461d9636126e9c0769189145aba4f6623b13ac05.?1498200343" class="fr-fic fr-dii"></a>
	<br>
</p>

<p><img width="120" name="en-media:image/jpeg:cf97fd9e6e5d74abf690088acd551f98:none:none" src="https://i.froala.com/download/a3c0eecfede17f2fc00b4416dc54c0f018be7769.?1498200343" class="fr-fic fr-dii">허문명 논설위원</p>

<p>　힐러리 클린턴 미국 민주당 대선 후보와 도널드 트럼프 공화당 대선 후보의 첫 TV토론 후 대부분의 한국 언론은 &lsquo;힐러리 승리&rsquo;라고 보도했지만 미국 내에서는 &ldquo;트럼프가 이겼다&rdquo;는 정반대 조사 결과를 내놓은 언론도 많다. 시사주간지 타임은 55 대 45로 트럼프가 앞섰고, CNBC방송에서는 67 대 33까지 벌어졌다. 워싱턴타임스는 &ldquo;유력 매체인 두 조사에는 100여만 명이 넘게 참여했다&rdquo;며 &ldquo;두 조사 결과를 합치면 압도적으로 트럼프 승리&rdquo;라고 했다. 심지어 abc방송은 트럼프가 54%로 1위, 힐러리는 10%로 4위였다.</p>

<p>
	<br>
</p>

<p>　</p>

<table align="right">
	<tbody>
		<tr>
			<td>
				<br>
				<br>
			</td>
		</tr>
	</tbody>
</table>

<p>국내 언론들이 힐러리 승리의 근거로 주로 인용한 CNN, 워싱턴포스트(WP), 뉴욕타임스(NYT)가 친(親)힐러리, 반(反)트럼프 매체라는 것도 유념할 대목이다. NYT는 공식적으로 힐러리를 지지했고, WP는 별도 팀까지 구성해 트럼프의 언행 불일치와 자질 부족 문제를 부각시키며 트럼프와 전쟁 중이다. 62 대 27로 힐러리 압승을 보도한 CNN 조사에 대해 영국 가디언은 28일 &ldquo;조사 대상이 521명으로 너무 적은 데다 41%가 민주당 지지, 26%가 공화당 지지라고 밝혀 결과는 정해진 것이나 다름없었다&rdquo;고 했다. 기사 밑에는 CNN을 &lsquo;클린턴 뉴스 네트워크(Clinton News Network)&rsquo;라고 비꼬는 댓글이 달렸다.</p>

<p>
	<br>
</p>

<p>　50 대 33으로 트럼프 승리를 전한 보수 성향의 폭스뉴스는 &ldquo;온라인 조사는 신뢰성이 떨어진다는 것을 전제하더라도 토론 후 트럼프 지지자들이 더 열광적으로 지지를 굳혔다는 걸 보여주었다&rdquo;며 &ldquo;힐러리가 준비를 철저히 했고 팩트 정리 훈련이 잘돼 말을 잘한 것은 사실이지만 트럼프의 준비되지 않은 거친 말과 행동이 기존 정치인들과는 다른 모습을 보여줘 오히려 좋았다고 한 사람도 많았다&rdquo;고 전했다.&nbsp;</p>

<p>
	<br>
</p>

<p>　미 언론에 나타난 친트럼프 여론을 종합해보면 미국 중산층은 남의 돈(세금과 기부)으로 화려한 삶을 살아오면서 비밀에 병적으로 집착하는 힐러리보다 직접 번 돈으로 창의적이고 도전적인 삶을 살아오면서 낙관주의적인 트럼프가 무너진 미국을 바꿀 수 있다고 생각하고 있다. 이번 TV토론을 통해 그가 미친 게 아니라 지극히 정상이어서 대통령 직을 수행할 만한 사람이라고 생각을 바꿨다는 지지자들도 있었다.&nbsp;</p>

<p>
	<br>
</p>

<p>　주로 고학력인 기존 전통 매체 기자들이 엘리트 의식에 사로잡혀 밑바닥 민심을 제대로 읽지 못한다는 지적은 민주당 경선 후보로 나와 돌풍을 일으켰던 버니 샌더스 때부터 있었다. 주류 언론들은 처음엔 그를 &lsquo;당선 가능성이 전혀 없는 히피 사회주의자&rsquo;라고 무시했다가 나중에서야 &lsquo;양극화를 해결하라는 샌더스 현상을 감지하지 못했다&rsquo;며 공개적인 반성 기사들을 쏟아놓기도 했다.</p>

<p>
	<br>
</p>

<p>　선입관을 강하게 믿어 통계 수치조차 자기 식대로 해석하는 것을 &lsquo;확신 편견&rsquo;이라고 한다. 미 대선을 바라보는 우리에게도 이게 있는 건 아닐까. 1996년 빌 클린턴 2기 집권의 일등공신이었지만 지금은 트럼프를 돕고 있는 선거 전략가 딕 모리스는 최근 한국 월간지(월간중앙)와의 인터뷰에서 &ldquo;한국의 신문, 방송 기사를 보다 보면 힐러리가 이미 대선에서 압승한 것처럼 느껴진다. 트럼프 관련 보도는 &lsquo;인종차별주의자&rsquo; &lsquo;정신이상자&rsquo; 같은 가십성 보도만 넘치지 &lsquo;트럼프 현상&rsquo;에 대한 분석 기사는 별로 보이지 않는다. 한국은 미국 정치를 자신들의 정치적 시각으로 보는 착시가 있다&rdquo;고 했다.&nbsp;</p>

<p>
	<br>
</p>

<p>　미국 선거 결과는 한국에 중대한 영향을 미친다. 희망이나 기대, 선입관을 걷어내고 종합적이고 냉정한 이성의 눈이 필요하다. 미 대선은 이제 시작이다. &nbsp;</p>

<p>　&nbsp;</p>

<p>MVC 패턴의 이해</p>

<table style="width: 100%;">
	<tbody>
		<tr>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
		</tr>
		<tr>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
		</tr>
		<tr>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
		</tr>
		<tr>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
		</tr>
	</tbody>
</table>`,
};
mockObj[12] = {
	title: '"미군 없는 아시아가 도둑처럼 올 수도 있다"',
	tags: ['미국', '한국', '중국', '논쟁'],
	is_publish: false,
	data: `<p>&quot;미군 없는 아시아가 도둑처럼 올 수도 있다&quot;</p>

<p>
	<a href="http://www.pressian.com/news/article_list_writer.html?search_no=10024&name=%EC%9E%84%EA%B2%BD%EA%B5%AC" target="_blank" title="필자의 다른 기사"><img name="en-media:image/jpeg:04326329d083ec951be5d79203d861a5:none:none" src="https://i.froala.com/download/e73fe43c2107de2e631e2b9d9c793a7b316900af.?1498200398" class="fr-fic fr-dii">&nbsp;임경구 기자</a>
</p>

<p>2016.09.26 15:17:40</p>

<p><img name="en-media:image/jpeg:9770564c59a429b66daa19fa53873ad0:none:none" src="https://i.froala.com/download/8ae947e32c0d8f92f5402bb74ffb4e230304a233.?1498200398" class="fr-fic fr-dii"></p>

<p><img name="en-media:image/jpeg:e2e04beef58924c63f86c663e9037db4:none:none" src="https://i.froala.com/download/bd16418ceed5fa1209a9b31592d88c14b879a019.?1498200398" class="fr-fic fr-dii"></p>

<p>
	<a href="https://story.kakao.com/share?url=http://www.pressian.com/news/article.html?no=141872&ref=kko"><img name="en-media:image/jpeg:17c5fdb52c968f3bf5ec9bc921f1eb8c:none:none" src="https://i.froala.com/download/0c113f73dd0c7de08707eeccdc30179e0d1ba2a1.?1498200398" class="fr-fic fr-dii"></a>
	<br>
</p>

<p>
	<a href="http://www.pressian.com/news/scrap_proc.php?mode=insert&no=141872"><img name="en-media:image/jpeg:0d28e1d7cc75af658c759fcbf37f9822:none:none" src="https://i.froala.com/download/4f34931b72b558fb979c9892da5d17f0d2139385.?1498200398" class="fr-fic fr-dii"></a>
	<br>
</p>

<p><img name="en-media:image/jpeg:ab3ef2d8235245d557c94197623efc17:none:none" src="https://i.froala.com/download/9daeb792435cb7130578c151808990dced63e3a5.?1498200398" class="fr-fic fr-dii"></p>

<p><img name="en-media:image/jpeg:bee7e3762aa0505c2d7950821c90ba96:none:none" src="https://i.froala.com/download/b69867157747abcdab782ed665dc8e11cb67568b.?1498200398" class="fr-fic fr-dii"></p>

<p><img name="en-media:image/jpeg:72863560be8945ff7930793a136f3047:none:none" src="https://i.froala.com/download/929acc675e40764bc1bc39017a4f8582444d1849.?1498200398" class="fr-fic fr-dii"></p>

<p><img name="en-media:image/jpeg:11722429075030c8062a355363270609:none:none" src="https://i.froala.com/download/3f861a2f2d44932cc1bf8f33a38d0c9458268571.?1498200398" class="fr-fic fr-dii"></p>

<p><img name="en-media:image/png:47c0b2ac3298df3c4539078eeb8d1fae:none:none" src="https://i.froala.com/download/4651cba846945a98e44ac4884ac2b8c79efd7175.?1498200398" class="fr-fic fr-dii"></p>

<p><img name="en-media:image/png:8b322f332b820038e0840faa3d662fb3:none:none" src="https://i.froala.com/download/af6fd86037c4f53b66fa8c1c0940f6b4703f0c9e.?1498200398" class="fr-fic fr-dii"></p>

<p>
	<a href="https://story.kakao.com/share?url=http://www.pressian.com/news/article.html?no=141872&ref=kko"><img name="en-media:image/png:9ad429914c5e5fb59d324639f8f99e08:none:none" src="https://i.froala.com/download/abda4120080c70aa54cde168ee5b6d50590ff656.?1498200398" class="fr-fic fr-dii"></a>
	<br>
</p>

<p>&quot;미군 없는 아시아가 도둑처럼 올 수도 있다&quot;</p>

<p>임경구 기자</p>

<p>
	<a href="http://www.pressian.com/"><img name="en-media:image/png:bdaf364c7afed5ea7396cb973ba75c84:none:none" src="https://i.froala.com/download/02103f73efd7e1a2dec02470fc1a4340c0d44b19.?1498200398" class="fr-fic fr-dii"></a>
	<br>
</p>

<p>[윤여준-이병한 대담] &#39;반전의 시대&#39;, 동‧서양 이분법을 넘어</p>

<p>소설가 장정일은 &quot;새로운 질문을 낳는 책, 주류와 다른 시각을 보여주는 책, 그 시대의 절박한 문제에 응답하려 분투하는 책&quot;이라고 했다.</p>

<p>
	<br>
</p>

<p>2015년 2월부터 3년 여정으로 유라시아를 견문하고 있는 역사학자 이병한의 책 &lt;반전의 시대&gt;(서해문집, 2016)는 동서와 고금을 이해하는 새로운 시각을 제시한다.</p>

<p>
	<br>
</p>

<p>출간에 앞서 &lt;프레시안&gt;에 글이 연재될 때부터, 예사롭지 않은 글솜씨로 시공을 넘나들며 동아시아 담론을 엮어가는 이 박사에게 매료된 이가 윤여준 전 환경부장관이었다.</p>

<p>
	<br>
</p>

<p>자리를 만들었다. 왜 반전의 시대이며, 어떻게 흘러갈 것인가. 원로 &#39;애독자&#39;가 묻고 젊은 학자가 답했다.&nbsp;</p>

<p>
	<br>
</p>

<p>이병한 박사는 동양과 서양을 대립적 관계로 보는 시각에 반대한다. &quot;동서합작을 강조하고, 유럽과 아시아를 아울러 &#39;유라시아&#39;라고 표현하는 것 또한 동서를 갈라서 생각하는 이분법을 타파하고 싶었기 때문이다.&quot;&nbsp;</p>

<p>
	<br>
</p>

<p>그는 &quot;제국주의, 식민주의, 패권주의와는 다른 논리로 세계가 재편되어 간다&quot;고 전망하며 &quot;서방 문명을 배우고 익힌 동방 쪽에서 도리어 동서 문명을 합작하고 혼합할 가능성이 더 크다&quot;고 했다.&nbsp;</p>

<p>
	<br>
</p>

<p>그에겐 미국과 중국의 &#39;패권 경쟁&#39;도 &quot;허구적 담론&quot;이다. &quot;중국과 미국 사이에서 어느 줄에 설 것인지를 강요하는 &#39;미국발 프레임&#39;&quot;이라는 것이다. 그러면서 중국의 굴기, 인도의 부상, 이슬람의 각성이 동시적으로 분출되는 유라시아 지형에 주목했다.</p>

<p>
	<br>
</p>

<p>&quot;유라시아 전체 지도를 펼쳐놓고 작금의 형세를 살피면 전혀 다른 그림이 보인다. 지난 200년 억압받았던 여러 나라들이 동시에 부상하고 있고, 여러 문명들이 더불어 부흥하고 있다. 그리고 그 나라들 간에, 문명들 사이의 오래된 연결망을 새로이 복구하고 복원해가고 있다.&quot;&nbsp;</p>

<p>
	<br>
</p>

<p>그래도 중국에 관한 물음이 이어졌다. 특히 전통과 근대, 사회주의와 시장경제가 하이브리드(혼종)된 &#39;차이나 모델&#39;에 관해.&nbsp;</p>

<p>
	<br>
</p>

<p>윤 전 장관은 &quot;정치는 사회주의, 경제는 자본주의 시장경제라는 하이브리드가 가능할 수 있겠나? 나는 굉장히 회의적&quot;이라고 했다.&nbsp;</p>

<p>
	<br>
</p>

<p>이에 이 박사는 &quot;20세기식 자본주의나 사회주의라는 개념으로는 중국을 온전히 이해하기 힘들다&quot;면서 &quot;국가는 공적 역할을 담당했던 기왕의 중국식 정치경제모델이 여전히 영향을 미치고 있다&quot;고 했다.&nbsp;</p>

<p>
	<br>
</p>

<p>윤 전 장관은 &#39;반전의 시대&#39;에 한국의 적응 지체를 우려했다. 다른 여러 나라들처럼, 민주화 이후 &quot;민주주의가 자본주의에 포획된 것으로 봐야 하지 않나&quot;면서 &quot;반전 시대의 논리를 제시하고 실천할 지도자와 집단의 출현이 갈급하지만, 지금 한국 사회에는 그런 싹조차 보이지 않는다&quot;고 했다.&nbsp;</p>

<p>
	<br>
</p>

<p>이 박사 역시 한국의 민주화 과정을 &quot;500년을 통해 유교문명이 누적되고 축적되고 저변으로 확산, 심화되어갔던 &#39;동방형 문명화&#39; 과정이 20세기 후반에 더더욱 민중화됨으로써 민주화 운동으로 전개된 것&quot;이라고 설명하면서도 &quot;민주화 세력조차 이 같은 자신의 문명적 토대를 잘 모른다&quot;고 했다.&nbsp;</p>

<p>
	<br>
</p>

<p>특히 사드 배치 논란과 관련해 이 박사는 &quot;사드 배치가 동아시아에서 어떤 의미를 갖는 것인지를 종합적으로 판단해야 한다. 신냉전 구도를 획책하는 세력의 편에 일방적으로 서게 되면, 장차 운신의 폭이 대폭 좁혀진다. 패착이다&quot;라고 했다.</p>

<p>
	<br>
</p>

<p>이 박사는 이어 한미 동맹의 본질을 &#39;군사 동맹&#39;으로 규정하며 &quot;(미국은) 당분간 그 비용을 동맹국들에게 전가하면서 지배체제를 유지하려 하겠지만, 어떤 임계점, 분기점이 생기기 마련이다. 어쩌면 의외로 그리 멀지 않은 시점일지도 모른다&quot;고 했다.</p>

<p>
	<br>
</p>

<p>그는 최근 미국의 아시아 정책에 어깃장을 놓고 있는 필리핀을 언급하며 &quot;미군 없는 아시아는 도둑처럼 올 지도 모른다&quot;고 말하기도 했다.&nbsp;</p>

<p>
	<br>
</p>

<p>이 박사가 주목하는 &#39;동아시아 공동체&#39;는 가능할까? 그는 &quot;남의 것 흉내내기, 새 것 따라하기는 이제 그만두고 옛 공부를 다시, 새롭게, 다함께 해보자&quot;고 했다. 반전의 시대에 한국이 다시 한 번 적응 지체를 겪지 않기 위한 젊은 학자의 제언이다.</p>

<p>
	<br>
</p>

<p>다음은 지난 23일 &lt;프레시안&gt; 편집국에서 진행된 윤여준 전 장관과 이병한 박사의 대담 전문.
	<br>
	<br>
</p>

<p><img name="en-media:image/jpeg:1b538357bc9b8638287bef64b2ab7e12:none:none" src="https://i.froala.com/download/05f39152c977fe0bca589ec101e0b02bbec0d40d.?1498200399" class="fr-fic fr-dii"></p>

<p>▲ 대담하고 있는 윤여준 전 환경부장관(좌), 이병한 역사학자(우) ⓒ프레시안(최형락)</p>

<p>
	<br>
</p>

<p>
	<br>
</p>

<p>&quot;세계는 패권주의와 다른 논리로 재편되어 갈 것&quot;&nbsp;</p>

<p>
	<br>
</p>

<p>윤여준 : 우선 이 박사 책을 본 감상부터 말하자면, 우리가 서구의 근대가 씌운 안경으로 세상을 보아왔다는 사실을 뼈저리게 느끼는 계기가 됐다. 동북아에 갇혀 냉전적 시각으로 세상을 본 것이다. 민주주의, 자본주의에 대해서도 맹목적 환상에 젖어 있었던 게 아닌가 하는 반성을 했다.&nbsp;</p>

<p>
	<br>
</p>

<p>이 박사는 책머리에서 &#39;개발파도 개혁파도 근대를 향한 질주(산업화, 민주화, 서구화)에 매달렸다. 그런데 정작 당도한 것은 서구의 황혼이다&#39;라고 했다. 그러면서 &#39;다른 백년의 논리를 갈고 닦는 것이 후학의 책무&#39;라고 언급했다. 이걸 읽으면서 동양에 대해 눈을 뜬 사람이 많을 것이다. 독자의 한 사람으로서 감사하다. &nbsp;</p>

<p>
	<br>
</p>

<p>궁금한 게 많다. 우선 1972년 닉슨의 방중으로 시작된 중&middot;미 간의 화해를 전환시대의 시작으로 보면서 뒤따른 박정희 정권의 유신체재 선포와 김일성의 유일체제 구축을 전환시대의 적응 지체로 규정했는데, 전환시대가 시작되는 시점에서 박 대통령과 김 주석이 각각 어떤 길을 갔어야 했다고 보나? &nbsp;</p>

<p>
	<br>
</p>

<p>이병한 : 1972년 이후의 동아시아를 회고해보면 그해 곧장 중국과 일본은 수교까지 갔다. 미국보다 일본이 더 기민하게 움직인 것이다. 1979년 중국은 개혁‧개방 정책을 본격화 했고 일본은 그에 맞춰 열도 개조에 착수해서 서일본 위주로 정책을 바꿨다. 중국의 동남부와 일본의 서부, 그리고 베트남전쟁 이후의 동남아시아까지 아울러 동아시아 일대에 거대한 분업체제가 형성되어간 것이다. 미국과 소련에서 벗어난 동아시아 공동체의 원형이 될 수도 있던 흐름이 아니었나 싶다. 이 흐름이 20여년 지속되어 일정한 수준으로 제도화 되었다면, 1997년의 아시아 금융위기가 같은 사태가 일어나지 않거나 훨씬 수월하게 대처할 수 있었을지도 모른다. 안타깝게도 이런 흐름과 정반대로 역사가 진행되었던 곳이 바로 한반도이다. 남쪽은 유신체제로 역행했고, 북쪽 또한 유일체제로 역주행 했다.</p>

<p>
	<br>
</p>

<p>당시 남북한의 실력을 비교해 보면 여전히 북한이 좀 우위에 있었던 것 같다. 북쪽에서 오히려 포용 정책을 폈어야 했다. 당시 박정희는 미군이 철수하겠다는 걸 보면서 지금의 북한처럼 핵무장을 하겠다고 했다. 결사적으로 체제수호에 나선 것이다. 그렇다면 그런 남을 보듬고 아울러 가는 아량을 발휘했어야 할 것인데, 정작 김일성은 1975년 북베트남이 남베트남을 무력으로 통일하는 것을 보면서 마오쩌둥에게 달려가서 한국전쟁을 한 번 더 하겠다고 요청했다. 아시아에서의 미군 철수와 베트남, 라오스, 캄보디아 등 인도차이나 반도의 공산화를 보면서 역사가 자기편이라고 크게 오판한 것이다.&nbsp;</p>

<p>
	<br>
</p>

<p>남북 모두 자신의 정권과 체제 위주로만 사고했을 뿐, 민족 전체를 아우르는 역량이 부족했다. 그때부터 남북교류가 활발했더라면 한반도와 동아시아의 탈냉전은 유럽연합의 등장에 버금갈 만큼의 괄목할 성과를 거두었을지 모른다. 일차적으로는 남북의 권력자 탓이고, 북의 인민과 남의 시민 또한 그 책무를 다하지 못한 것이라 하겠다. 당시 남북이 그릇된 선택을 함으로써, 한반도는 여전히 동아시아, 나아가 세계의 화근이 되고 있다. &nbsp;&nbsp;</p>

<p>
	<br>
</p>

<p>윤여준 : 세상이 바뀌고 있어서 반전의 시대가 도래 하고 있다고 강조했다. &#39;지난 200년의 시계추가 거꾸로 뒤집혀 재차 동풍이 불고 있다&#39;면서 그 징표랄까, 상징이랄까, 중국의 굴기, 인도의 부상, 이슬람의 각성이 거의 동시적으로 분출하는 것은 우연이 일치가 아니라 &#39;오래된 미래&#39;가 돌아오고 있는 것이라고 했다. 이 말을 서세동점의 시대가 저물고 동세서점의 시대고 오고 있다는 뜻으로 받아들여도 되나?&nbsp;</p>

<p>
	<br>
</p>

<p>이병한 : 그러한 논리에 결단코 반대한다. 내가 했던 얘기가 그런 방향이라면 반전의 시대가 아니라 &#39;역전의 시대&#39;라고 했을 것이다. &nbsp;</p>

<p>
	<br>
</p>

<p>동양이 서양으로부터 당한 것을 서양에게 고스란히 되돌려 주는 게 역전이다. 인도가 영국을 식민지로 삼고, 베트남이 프랑스를 남북으로 갈라놓고&hellip;. 그런 논리를 말하는 게 아니다. 제국주의, 식민주의, 패권주의와는</p>

<h3>MVC 패턴의 이해</h3>

<table style="width: 100%;">
	<tbody>
		<tr>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
		</tr>
		<tr>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
		</tr>
		<tr>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
		</tr>
		<tr>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
		</tr>
	</tbody>
</table>`,
};
mockObj[13] = {
	title: '[2016 미국의 선택]예배 자주 참석하면 공화당, 아니면 민주당…종교를 보면 대선이 보인다',
	tags: ['미국', '대선'],
	is_publish: false,
	data: `<p>미국 대선을 지켜보는 사람들의 관심은 민주당의 힐러리 클린턴과 공화당 도널드 트럼프의 경제, 안보, 외교정책에 집중된다. 그런데 종교라는 요인을 들여다보면 미국인들이 어떻게 투표할 것인지 좀 더 분명히 알 수 있다. 간단히 말해 두 가지 질문을 던짐으로써 어떤 사람의 정당 성향과 투표 결정을 신뢰도 높게 구분해낼 수 있다. 당신은 교회에 다니는가? 만약 그렇다면 얼마나 자주 가는가?</p>

<p>
	<br>
</p>

<p><img src="https://i.froala.com/download/f01b2bac3dfd6103108c7928cd43be625a5e300b.?1498200464" class="fr-fic fr-dii"></p>

<p>매주 또는 그보다 더 자주 예배에 참석한다고 하면 거의 확실히 공화당에 치우친, 트럼프에게 투표할 사람이다. 반면 &lsquo;아니오&rsquo;라고 답하는 사람은 거의 확실히 민주당 성향의, 클린턴 지지자이다. 한마디로 오늘날의 공화당은 가장 종교적(기독교적)인 미국인들의 지지를 받는 정당이고, 민주당은 세속적인 미국인들과 종교적 소수집단의 지지를 받는 정당이다. 물론 예외도 있다. 흑인들과 라티노들은 매우 종교적일지라도 강하게 민주당에 치우친 유권자들이며 모든 공화당원이 종교적인 것은 아니다.</p>

<p>
	<br>
</p>

<p>이번 대선의 유권자 집단들을 종교 정체성에 따라 들여다보자. 백인 복음주의 기독교도들은 미국 인구의 5분의 1 정도를 차지한다. 그들은 최근 선거들에서 압도적으로 공화당을 지지했다. 그들 중 79%가 2012년 미트 롬니, 72%가 2008년 존 매케인, 78%가 2004년 조지 W 부시에게 투표했다. 이 집단은 트럼프도 강력 지지한다.</p>

<p>
	<br>
</p>

<p>어떤 종교에도 속하지 않은 사람들도 인구의 5분의 1 정도다. 이들은 복음주의 기독교도들이 공화당 성향인 것만큼이나 공고한 민주당 지지 성향이다. 확고한 클린턴 지지자들이다. 인구의 10분의 1인 흑인 기독교도들은 압도적으로 민주당 성향이고 클린턴에 투표할 사람들이다. 한 자릿수 비율을 차지하는 소수종교 집단들은 대부분 민주당 지지 성향이다. 무슬림, 유대교도, 수많은 동양 종교 신자들과 뉴에이지 성향인 사람들이 포함된다. 모르몬 기독교는 종교적 소수자들 중에서는 예외적으로 굳건히 공화당을 지지한다.</p>

<p>
	<br>
</p>

<p>두 주요 정당을 놓고 성향이 양분된 집단도 있다. 이른바 기독교 &lsquo;주류(mainline)&rsquo;로 불리는 비(非)복음주의 기독교도들은 인구의 5분의 1이 채 되지 않는데, 이 집단은 최근 선거들에서 상대적으로 공화당에 좀 더 많은 표를 던졌다. 이 집단에 중요한 결정 요인은 종교 정체성이 아니라 종교 활동이다. 이 집단 내의 덜 종교적인 사람들은 최근 세 차례 대선에서 민주, 공화 양당에 거의 비슷한 비율로 투표했다. 반면 교회에 자주 나가는 사람들은 공화당 후보를 더 선호해왔다. 여론조사를 보면 올해 선거에서도 비슷한 경향을 보인다.</p>

<p>
	<br>
</p>

<p>인구의 4분의 1이 채 되지 않는 가톨릭은 미국 선거에서 부동표(swing vote)로 알려져있다. 가톨릭을 하위 집단별로 조사해보면 유용한 시사점을 발견하게 된다. 백인 가톨릭은 공화당에 치우쳐, 강한 민주당 성향을 띠는 라틴계 가톨릭들과 다르게 투표한다. 특히 독실한 가톨릭들은 강한 공화당 성향을 띠며, 민주당에 치우친 명목상의 가톨릭 신자들과는 다르게 투표한다.</p>

<p>
	<br>
</p>

<p>지금처럼 선거 경합이 치열할 때에는 이런 종교 집단들이 어느 정도나 투표장에 나올 것인지가 중요하다. 백인 복음주의자들은 2004년 투표율이 높았고 조지 W 부시의 재선에 결정적 역할을 했다. 2008년과 2012년에 오바마는 전통적인 민주당 성향 종교 집단들과 비종교인, 가톨릭 부동표들을 얻어서 이겼다.</p>

<p>
	<br>
</p>

<p>2016년 대선에서 이기려면 트럼프로서는 백인 복음주의자들과 독실한 가톨릭들의 높은 투표율과 압도적 지지를 얻어야 한다. 독실한 주류 기독교도들 중 다수를 안정적으로 확보하면서, 다른 종교 집단들에서의 표 차이를 최대한 줄이거나 그들의 투표율이 낮기를 기대할 수밖에 없다. 클린턴 입장에서는 흑인 기독교도들과 덜 독실한 백인 주류 기독교도들, 라틴계 가톨릭과 비종교인들, 소수종교 집단들을 얻으면 이길 수 있다. 미국의 정치 평론가들은 이번 대선에서 종교의 중요성을 그리 많이 얘기하지 않지만, 그동안의 기록들을 보면 종교 요인에도 좀 더 긴밀한 관심을 기울일 필요가 있다.</p>

<p>&lt;마크 J 로젤 미 조지메이슨대 공공정책대학원장&middot;미국 대선보도 자문위원&gt;</p>

<p>
	<br>
</p>

<p>▶ 경향신문 SNS <a href="http://twitter.com/kyunghyang">[트위터]</a>
	<a href="http://facebook.com/kyunghyangshinmun">[페이스북]</a></p>

<p>▶ <a href="http://sports.khan.co.kr/comics/">[인기 무료만화 보기]</a></p>

<p>
	<br>
</p>

<p>&copy;경향신문(<a href="http://www.khan.co.kr/">www.khan.co.kr</a>), 무단전재 및 재배포 금지</p>

<p><span title="공감해요">2</span></p>

<p>보내기</p>

<h3>
	<a href="http://www.khan.co.kr/default.html"><img height="27" src="https://i.froala.com/download/8418339c16e73298bfe570fe6d8930051dc26ee2.?1498200464" class="fr-fic fr-dii"></a>
</h3>`,
};
mockObj[14] = {
	title: '[단독 인터뷰] 최인아 前 제일기획 부사장 “직장인들이 찾는 ‘생각의 숲’ 만들게요”',
	tags: ['영감'],
	is_publish: false,
	data: `<p>다음 달 서울 강남의 선릉역 인근에 한 서점이 문을 연다. 5000여권의 장서를 갖춘 70평 규모의 &lsquo;최인아책방&rsquo;. 전 제일기획 부사장으로 삼성그룹 최초의 여성 부사장을 지낸 최인아(55&middot;사진)씨가 책방 주인이다. 2012년 말 퇴직한 뒤 3년 반 만에 책방 주인으로 제2의 인생을 시작하는 최 전 부사장을 26일 만났다.</p>

<p>
	<br>
</p>

<p>-유명 광고인이었는데 광고회사가 아니라 책방을 연다니 의외입니다.</p>

<p>
	<br>
</p>

<p>&ldquo;회사를 그만둘 때는 더 이상 일은 안 하겠다고 생각했어요. 공부하면서 학생으로 살아야지 그렇게 생각했지요. 그래서 대학원에도 갔고. 그런데 2년이 지나니까 다시 일을 하고 싶다는 마음이 올라오더라고요. 작년 초부터 몇몇이 모여 광고회사를 해볼까 상의하고 있었는데, 사람들에게 책을 읽힐 수 있는 솔루션을 찾아 달라는 의뢰가 들어온 거예요. 그걸 우리가 직접 하면 안 될까, 우리가 한 번 해보자, 그래서 후배(정치헌 디트라이브 대표)와 함께 동업으로 서점을 하게 됐죠.&rdquo;</p>

<p>
	<br>
</p>

<p>-어떤 서점을 만들 생각입니까.</p>

<p>
	<br>
</p>

<p>&ldquo;베스트셀러를 파는 서점은 아니에요. 주요 타깃은 일하는 사람들입니다. 직장인을 위한 서점. 강남에 책방을 내는 것도 그런 이유가 있어요. 직장인들에게 생각하는 힘을 키우고, 직장생활에서 겪는 마음의 문제를 해결하는데 도움을 주는 그런 서점을 만들려고 해요.&rdquo;</p>

<p>
	<br>
</p>

<p>-책방 페이스북을 보면 &lsquo;생각하는 힘&rsquo;이 키워드이고, &lsquo;생각의 숲&rsquo;이 콘셉트입니다. &lsquo;생각&rsquo;을 강조하는 이유는 뭔가요.</p>

<p>
	<br>
</p>

<p>&ldquo;우리 사회에 생각하는 사람들이 너무 적은 것 같아요. 자기 생각이 없고, 비판적으로 생각할 줄 몰라요. 개인이 적극적으로 어떤 길을 선택하는 과정을 거치지 않고 다들 하나의 길을 따라가고 있어요. 여기에 뭔가 태클을 걸어야 한다고 생각해요. 책은 다양한 생각들을 만나고 자신의 생각을 세우는 가장 근본적인 콘텐츠라고 생각해요.&rdquo;</p>

<p>
	<br>
</p>

<p>-그러니까 &lsquo;최인아책방&rsquo;은 최 전 부사장이 사회에 보내는 메시지이기도 하군요.</p>

<p>
	<br>
</p>

<p>&ldquo;학원가 간판을 봐도, 베스트셀러 목록을 봐도 공통점은 단기성이에요. 빨리 뭘 하는 것, 당장 써먹을 수 있는 것, 그런 게 사람들의 관심이죠. 저는 그게 생각의 힘을 가로막는 가장 근본적인 이유라고 생각해요. 어떤 일을 할 때 기술적으로 접근하고 효율을 따지는 것, 지름길이나 요령, 임시방편을 찾는 것, 그게 영리하다고 생각하지만 그렇게 일을 하다 보면 10년이 넘어도 쌓이는 게 없어요. 축적이 없는 거죠. 실패할 수도 있지만 정직하게 대면해서 애쓰다 보면 그 과정에서 저한테 쌓인 것은 어디 안 가요. 내 것이 되는 거죠.&rdquo;</p>

<p>
	<br>
</p>

<p>-제2의 인생으로 책방 주인을 선택한 것에 대해 만족합니까.</p>

<p>
	<br>
</p>

<p>&ldquo;삶이 좀더 충만해질 것 같아요. 광고회사에 있을 때는 사실 그만두는 날까지 많이 부대꼈어요. &lsquo;재미&rsquo;가 있었으니까 오래 그 일을 했겠지만 &lsquo;의미&rsquo;라는 부분은 좀처럼 채워지지 않은 상태로 있었거든요. 어떤 일이 의미나 가치를 가지려면 그 일이 세상에 도움이 되는 것이어야 하는데, 광고는 본질적으로 클라이언트를 위한 일이니까요. 책방은 무엇보다 명분이 있는 일이에요. 우리 사회에 꼭 필요한 일이고.&rdquo;</p>

<p>
	<br>
</p>

<p>-강남 한복판에 꽤 큰 규모의 서점을 엽니다. 성공할 자신이 있습니까.</p>

<p>
	<br>
</p>

<p>&ldquo;일단 유지가 목표예요. 2년이 될지 3년이 될지 모르지만 일단 그 시간을 버틸 수 있다면 어떻게든 굴러갈 수 있을 거라고 생각해요. 우리 책방의 가치를 알아봐주는 사람들이 분명히 생겨날 거라고 생각해요. 저희들한테는 기획력이 있으니까 책 파는 것 외에 여러 가지 재미있는 일들도 준비하고 있어요.&rdquo;</p>

<p>
	<br>
</p>

<p>글=김남중 기자, 사진=곽경근 선임기자</p>

<p>
	<br>
</p>

<p><a href="http://www.kmib.co.kr/">[국민일보 홈페이지]</a>
	<a href="https://www.facebook.com/kukmindaily">[페이스북]</a>
	<a href="https://twitter.com/TheKukminDaily">[트위터]</a></p>

<p>
	<br>
</p>

<p><a href="http://news.kmib.co.kr/article/list.asp?sid1=prj&sid2=0034">[국민일보 꿀잼영상 바로가기]</a></p>

<p>
	<br>
</p>

<p>GoodNews paper ⓒ <a href="http://www.kmib.co.kr/">국민일보(www.kmib.co.kr)</a>, 무단전재 및 재배포금지</p>

<p>
	<br>
</p>

<p>[뉴스 미란다 원칙] 취재원과 독자에게는 국민일보에 자유로이 접근할 권리와 반론&middot;정정&middot;추후 보도를 청구할 권리가 있습니다. 고충처리인(gochung@k</p>`,
};
mockObj[15] = {
	title: '교황청과 중국, 관계 회복 위한 대화 나',
	tags: ['중국', '논쟁', '국제'],
	is_publish: false,
	data: `<p>지난 2015년 8월 4일 열린 안양교구 장인린 부주교의 서품식. 장 주교는 교황청과 중국 정부 양측에서 모두 인정을 받은 최초의 주교다.</p>

<p>교황청과 중국 공산당의 관리들이 올해 들어 벌써 두 번째 만나는 등 관계 개선에 급물살을 타고 있는 것으로 알려졌다.</p>

<p>
	<br>
</p>

<p>교황청과 중국의 소식통에 따르면 양국은 지난 4월 말 베이징에서 비공개로 만났다. 교황청은 2014년 6월부터 중국과 대화에 나서 왔고, 프란치스코 교황도 중국과의 관계 회복을 최우선 과제로 삼고 있다. 양측은 지난해 10월에 이어 올 1월에도 회동한 바 있다.&nbsp;</p>

<p>
	<br>
</p>

<p>한 소식통은 &ldquo;1월에 이어 얼마 되지 않아 또 다시 만난 것은 의미가 있다&rdquo;고 밝혔다. 또 다른 소식통에 따르면, 교황청은 급속한 관계 정상화 대신 실무진 간의 대화를 통해 골치 아픈 문제들을 하나씩 해결해 나가려는 것으로 알려졌다.</p>

<p>
	<br>
</p>

<p>교황청 국무원장 피에트로 파롤린 추기경은 5월 초 한 매체와의 인터뷰에서 &ldquo;중국과의 대화는 기복이 심한 긴 여정&rdquo;이라면서 &ldquo;이 여정은 아직 끝나지 않았고 하느님이 원하는 그때 끝날 것&rdquo;이라고 밝힌 바 있다.</p>

<p>
	<br>
</p>

<p>파롤린 추기경은 &ldquo;지금은 우호적인 상황으로 양측이 대화를 원하고 있으며 중국 내 가톨릭교회가 직면하고 있는 문제에 대한 해결책을 찾기 위해 공동으로 노력 중&rdquo;이라고 덧붙였다. 파롤린 추기경은 중국통으로 2009년까지 교황청의 협상단을 이끌고 중국 당국과 대화한 적이 있다.</p>

<p>
	<br>
</p>

<p>소식통에 따르면, 양측은 교황청의 승인 없이 불법으로 서품된 주교 8명에 대한 교황청의 사면을 논의 중인 것으로 전해진다. 중국의 한 교회연구가는 교황청이 인정하지 않는 중국 주교회의 주석 마잉린 주교와 부주석 궈진차이 주교의 사면을 기대한다고 밝혔다. 교황청은 중국 주교회의를 인정하지 않고 있다.</p>

<p>
	<br>
</p>

<p>하지만, 이 소식통은 중국이 불법으로 서품된 주교 8명 모두의 사면을 원하고 있고 교황청도 교회가 임명한 주교 20명을 중국 정부가 인정하길 원하고 있어, 실무진 협상이 난항을 겪고 있다고 밝혔다.</p>

<p>UCAN 제공</p>

<table style="width: 100%;">
	<tbody>
		<tr>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
		</tr>
		<tr>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
		</tr>
		<tr>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
		</tr>
		<tr>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
		</tr>
	</tbody>
</table>`,
};
mockObj[16] = {
	title: '김환영의 직격 인터뷰] 철학자 도올 김용옥 “중국과 대등했던 고구려 이해해야 진정한 통일”',
	tags: ['중국', '역사', '논쟁'],
	is_publish: false,
	data: `<p>냐 하는 예상도 있지만 현실적으로 불가능하다. 중국의 학문 수준이 과학이나 기술 분야에서 아주 독자적으로 미국을 능가하려면 최소한 1세기는 걸릴 것이다. 학문이 얼마나 중요한지 모르기 때문에 세계인들이 굉장한 착각을 하고 있다. 군사력은 미국 흉내를 좀 낼 만큼은 됐지만 군사력에서도 사실 미국을 따라잡으려면 한 50년 죽어라 노력해야 한다. 미국 경제가 아무리 개판이라고 해도, 중국이 미국 경제를 가지고 놀 만큼 탄탄한 경제를 가지기는 어렵다. 중국의 패권주의라는 것은 근본적으로 성립하지 않는다.&rdquo;</p>

<p>
	<br>
</p>

<p>　-언론 보도를 보면 사이비 종교가 중국에서 문제를 일으키고 있다.</p>

<p>
	<br>
</p>

<p>　&ldquo;메시아니즘이라든가 현세도피주의(escapism)의 경향성은 계속 있는 것이다. 현실 불만에서 오는 피세(避世)에 가장 걸맞고 가장 에너지를 잘 주는 게 기독교다. 기독교만큼 위대하면서도 유치한 종교가 없다. 현재 공산 이념은 중국 인민에게 &lsquo;마음의 뿌듯함&rsquo;을 주지 못한다. 어떤 투쟁을 할 적의 공산주의는 무용담으로서 굉장히 뿌듯한 게 있는데 투쟁이 사라진 평상이 되면 뿌듯함이 없다. 그래서 저는 중&middot;고등학교 커리큘럼에서 빨리 사회주의를 빼고 그 대신 사마천의 『열전』 같은 중국 고전으로 채우라고 권한 적도 있다. 대단한 효과를 볼 것이다.</p>

<p>
	<br>
</p>

<p>　공산주의의 허망함을 지금 한국의 격렬한 기독교인들이 가서 메워주고 있다. 그것을 감사하게 생각하는 중국인도 많다. 49년 중화인민공화국이 성립한 다음 종교를 정리했는데 정식 기독교 인구가 85만 명밖에 되지 않았다. 그런데 지금 1억이 넘는다. 앞으로 3억~4억까지는 늘어날 것이다. 당황한 중국 지도부는 불교 같은 재래 종교로 맞불을 놓고 있는데 맞바람 자체가 사이비 기독교보다 더 저열한 형태다. 요즘 돈 번 사람들이 많아져 어떤 출구가 필요한데 에너지가 전부 종교적인 데로 빠지고 있다.&rdquo;</p>

<p>
	<br>
</p>

<p>　-중국은 동아시아 문명&middot;민족의 거대한 블랙홀이다. 그런 중국이 역사상 초유의 사태를 맞이하고 있다. 공산주의건 기독교건 유래는 서양이다.</p>

<p>
	<br>
</p>

<p>　&ldquo;사실 중국에서 주체성 상실 문제가 심각하다. 중국이 위대한 국가로 다시 태어나려면 문화혁명에 대한 진정한 반성을 해야 한다. 마오쩌둥(毛澤東) 숭배 같은 과거 공산주의 무용담에서 빨리 벗어나야 한다. 제대로 된 역사를 쓰고 제대로 된 경전을 가르치고 합리적인 학문체계 발전을 빨리 가속화시키는 총체적인 새 프로그램이 필요하다. 시진핑(習近平)은 그런 프로그램을 추진할 만한 소양과 자격이 있다. 세계적으로 보기 힘든 훌륭한 정치 리더십이다. 주변 시스템이 그의 인식을 따라가기에는 낙후돼 있다. 안타깝다.&rdquo;</p>

<p>
	<br>
</p>

<p>　-박근혜 대통령을 어떻게 보는가.</p>

<p>
	<br>
</p>

<p>　&ldquo;우리나라에서 힘 있는 자는 대통령 하나다. 아직 우리나라는 제왕적 체계를 가지고 있는 나라다. 그런 특수성이 반드시 나쁜 것은 아니다. 그는 힘이 세기 때문에 국제적인 이니셔티브를 제시할 수 있다. 역대 대통령 중 가장 많은 일을 하실 수도 있는 분이다.&rdquo;</p>

<p>
	<br>
</p>

<p>　-비판도 많이 받고 있다. 가장 억울한 때는.</p>

<p>
	<br>
</p>

<p>　&ldquo;억울함이란 없다. 아무리 억울한 비판이라도 그 비판이 있기 때문에 제가 사는 것이다. 박정희 대통령에 대한 비판이 있어야만 박정희가 위대해진다는 것과 같은 이치다. 제가 살아오면서 우리 사회에서 과분한 대접을 받았다고 생각하지 원망하는 것은 없다.&rdquo;</p>

<p>
	<br>
</p>

<p>　-앞으로 하고자 하는 일은.</p>

<h4>DA 300</h4>

<p>
	<br>
</p>

<p>　&ldquo;엄청난 비전을 가진 사람들이 지도자로 뽑히는 그런 사회&middot;문화 전반의 분위기를 만드는 것이다. 이를 위해 헌신할 것이다. 그런 선학(先學)의 물줄기는 끊기지 않는다. 기회가 주어진다면, 이념의 경직성 때문에 주체사상만 알면 된다고 생각하는 북한 학생들에게 인류 보편적인 사상을 가르칠 것이다.&rdquo;</p>

<p>
	<br>
</p>

<p>　-학문을 왜 해야 하나. 또 어떻게 해야 하나.</p>

<p>
	<br>
</p>

<p>　&ldquo;학문이 발전한 나라들은 결코 약하지 않다. 우리 민족에게는 상무정신이 필요하다. 머리 쓰는 것만을 학문이라고 하지 말라. 인간이 윤리적으로 강해지는 것, 과학, 체력&hellip;. 이 모든 게 학문이다.&rdquo;</p>

<p>
	<br>
</p>

<p>김환영&nbsp;논설위원</p>

<p>사진=김상선 기자</p>

<p>
	<br>
</p>

<p>
	<br>
</p>

<p><a href="http://jcms.joins.com/CMS/Article/Article_Form_Receive.aspx?rid=30450826&rt=02&pr=dr%3d1%26startdate%3d2015-12-03%26enddate%3d2015-12-04%26prdate%3d%26satus%3d%26mcode%3dA%26myun%3d30%26pan%3d%26searchstr%3d">도올 김용옥은 &hellip;</a></p>

<p>
	<br>
</p>

<p>철학자&middot;교수&middot;극작가&middot;번역가&middot;연출가&middot;언론인&middot;한의사&middot;음악인&middot;배우&middot;방송인이다. 1948년 천안 출신으로 본관은 광산이다. 고려대(학사)&middot;국립대만대(석사)&middot;도쿄대(석사)&middot;하버드대(박사)에서 철학을, 원광대에서 한의학을 공부했다. 고려대&middot;서울대&middot;연변대&middot;한국예술종합학교&middot;한신대 등에서 후학을 가르쳤다. 60권이 넘는 책을 집필했다.</p>

<p>
	<br>
</p>

<p>[출처: 중앙일보] [김환영의 직격 인터뷰] 철학자 도올 김용옥 &ldquo;중국과 대등했던 고구려 이해해야 진정한 통일&rdquo;</p>

<table style="width: 100%;">
	<tbody>
		<tr>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
		</tr>
		<tr>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
		</tr>
		<tr>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
		</tr>
		<tr>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
		</tr>
	</tbody>
</table>`,
};
mockObj[17] = {
	title: '델 보스케: 카시야스야, 너 그렇게 살지 마라',
	tags: ['축구', '인성'],
	is_publish: false,
	data: `<table align="center" border="0" cellpadding="0" cellspacing="0" width="775">
	<tbody>
		<tr>
			<td align="left" valign="top">&gt; 해외축구게시판
				<br>
			</td>
			<td align="right">::: 게시판 성격에 맞지 않는 글은 사전공지 없이 삭제, 이동될 수 있습니다.
				<br>
			</td>
		</tr>
		<tr>
			<td colspan="2" height="5">
				<br>
				<br>
			</td>
		</tr>
	</tbody>
</table>

<table align="center" border="0" cellpadding="0" cellspacing="0" width="775">
	<tbody>
		<tr bgcolor="#5F5300">
			<td bgcolor="#5F5300" height="1">
				<br>
				<br>
			</td>
		</tr>
		<tr bgcolor="#AE9700">
			<td bgcolor="#FFFFFF" width="775">

				<table border="0" cellpadding="3" cellspacing="0" width="775">
					<tbody>
						<tr>
							<td align="middle" bgcolor="#AE9700" colspan="8" height="25" valign="middle">델 보스케: 카시야스야, 너 그렇게 살지 마라&nbsp;
								<br>
							</td>
						</tr>
						<tr>
							<td bgcolor="#FFF6B6" width="70">&nbsp;필명
								<br>
							</td>
							<td bgcolor="#FFFBE0" width="225">사디오 마네
								<br>
							</td>
							<td bgcolor="#FFF6B6" width="100">&nbsp;아이디
								<br>
							</td>
							<td bgcolor="#FFFBE0" width="230">Mane
								<br>
							</td>
							<td>
								<br>
								<br>
							</td>
							<td>
								<br>
								<br>
							</td>
							<td>
								<br>
								<br>
							</td>
							<td>
								<br>
								<br>
							</td>
						</tr>
						<tr>
							<td bgcolor="#FFFFFF" colspan="6" height="1">
								<br>
								<br>
							</td>
							<td>
								<br>
								<br>
							</td>
							<td>
								<br>
								<br>
							</td>
						</tr>
						<tr>
							<td bgcolor="#FFF6B6">&nbsp;조회수
								<br>
							</td>
							<td bgcolor="#FFFBE0">1372
								<br>
							</td>
							<td bgcolor="#FFF6B6">&nbsp;작성일
								<br>
							</td>
							<td bgcolor="#FFFBE0">2016-07-01 18:10:20
								<br>
							</td>
							<td>
								<br>
								<br>
							</td>
							<td>
								<br>
								<br>
							</td>
							<td>
								<br>
								<br>
							</td>
							<td>
								<br>
								<br>
							</td>
						</tr>
						<tr>
							<td bgcolor="#FFFFFF" colspan="6" height="1">
								<br>
								<br>
							</td>
							<td>
								<br>
								<br>
							</td>
							<td>
								<br>
								<br>
							</td>
						</tr>
						<tr>
							<td bgcolor="#FFF6B6">&nbsp;추천수
								<br>
							</td>
							<td bgcolor="#FFFBE0">5
								<br>
							</td>
							<td bgcolor="#FFF6B6">&nbsp;비추천수
								<br>
							</td>
							<td bgcolor="#FFFBE0">&nbsp;0
								<br>
							</td>
							<td>
								<br>
								<br>
							</td>
							<td>
								<br>
								<br>
							</td>
							<td>
								<br>
								<br>
							</td>
							<td>
								<br>
								<br>
							</td>
						</tr>
						<tr>
							<td bgcolor="#FFFFFF" colspan="4" height="1">
								<br>
								<br>
							</td>
							<td>
								<br>
								<br>
							</td>
							<td>
								<br>
								<br>
							</td>
							<td>
								<br>
								<br>
							</td>
							<td>
								<br>
								<br>
							</td>
						</tr>
						<tr>
							<td bgcolor="#FFF6B6">&nbsp;IP
								<br>
							</td>
							<td bgcolor="#FFFBE0">116.41.xxx.57
								<br>
							</td>
							<td bgcolor="#FFF6B6">&nbsp;신고하기
								<br>
							</td>
							<td bgcolor="#FFFBE0" valign="absmiddle">삭제요망분쟁,분쟁유도욕설비하 및 비방불법파일공유시도광고,도배및낚시음란게시물부적절닉네임 <img src="https://i.froala.com/download/31d238cfc3f9ea0ff9c5761308b6221063056f4d.?1498200676" class="fr-fic fr-dii"></td>
							<td>
								<br>
								<br>
							</td>
							<td>
								<br>
								<br>
							</td>
							<td>
								<br>
								<br>
							</td>
							<td>
								<br>
								<br>
							</td>
						</tr>
					</tbody>
				</table>
			</td>
		</tr>
	</tbody>
</table>

<table align="center" border="0" cellpadding="0" cellspacing="0" width="760">
	<tbody>
		<tr>
			<td bgcolor="white" valign="top" width="760">델 보스케 전 감독은 6월30일 오후(한국시간) 스페인 최대 라디오 방송사 카데나 SER과의 인터뷰를 통해 카시야스와의 소원해진 관계를 가감없이 공개했다. 그는 인터뷰를 통해 &quot;카시야스를 제외한 모든 선수들에게 사퇴의사를 전달했다&quot;고 전했다. 델 보스케에 따르면 그와 카시야스간의 관계가 멀어진 것은 카시야스가 다비드 데 헤아에 밀려 넘버2의 위치로 밀려난 뒤 그가 코칭스태프에게 적절하게 처신했기 때문이다. 이에 대해 델 보스케는 &quot;좋지 않은 행동&quot;이라고 지적했다.
				<br>
				<br>
				<br>그는 &quot;카시야스가 팀 동료들에게 했던 행동이 코칭스태프에게 했던 것과는 달랐다&quot;고 전했다. 이어 그는 &quot;카시야스는 백업 골키퍼로 밀려난 이후에도 동료들과 좋은 관계를 유지하며 적절하게 처신했지만 코칭스태프에게 보인 행동은 결코 좋지 않았다&quot;고 설명했다. 하지만 정확히 카시야스의 어떤 행동이 문제였는지에 대해서는 공개하지 않았다.
				<br>
				<br>
				<br>스페인은 크로아티아와의 조별라운드 3차전을 앞두고 이미 16강행이 확정된 상태였다. 때문에 크로아티아전에는 카시야스가 기회를 얻을 가능성이 점쳐지기도 했다. 하지만 크로아티아전 역시 데 헤아라 출전했고 결국 카시야스는 이번 대회에 출장시간을 전혀 얻지 못했다. 하지만 스페인 언론들은 크로아티아전을 전후해 &quot;카시야스가 크로아티아전 출장을 거부했다&quot;고 전하며 그와 코칭스태프 사이의 불화설을 우회적으로 시사하기도 했다.
				<br>
				<br>
				<br>델 보스케는 카시야스에 대한 실망감을 감추지 않았다. 그는 &quot;나는 늘 카시야스의 편이었다&quot;고 전제하며 &quot;그는 훌륭한 인성을 가진 위대한 선수이고 그가 뛰지 못하는 것에 대해 불만을 가진 것도 충분히 이해할 수 있지만 그의 행동은 분명 잘못된 것&quot;이라고 설명했다.
				<br>
				<br>
				<br>
				<br>
				<br><a href="http://www.focus.kr/view.php?key=2016070100165037686">http://www.focus.kr/view.php?key=2016070100165037686</a>
				<br>
			</td>
		</tr>
	</tbody>
</table>

<table style="width: 100%;">
	<tbody>
		<tr>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
		</tr>
		<tr>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
		</tr>
		<tr>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
		</tr>
		<tr>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
		</tr>
	</tbody>
</table>`,
};
mockObj[18] = {
	title: "[인사이드MLB] 로저 클레멘스 '전설이 무너지다' :: 네이버스포츠",
	tags: ['야구', '국제', '논쟁'],
	is_publish: false,
	data: `<p>
	<a href="http://m.sports.naver.com/all/news/office.nhn?ofc=224"><img width="220" height="50" src="https://i.froala.com/download/75f4c2cf27b653a53c4c8d3272da690e221eca65.?1498200741" class="fr-fic fr-dii"></a>
</p>

<h2>[인사이드MLB] 로저 클레멘스 &#39;전설이 무너지다&#39;</h2>

<p>기사입력 2007.12.14 오후 02:09</p>

<p>최종수정 2008.03.07 오후 03:31</p>

<p><a href="http://m.sports.naver.com/comment/list.nhn?objectId=news224,0000000586">1</a></p>

<p>폰트 작게 폰트 크게</p>

<p>2007년 12월14일(한국시간). 전설 속의 로켓은 죽었다.</p>

<p>14일 조지 미첼 전 민주당 상원위원이 이끈 &#39;미첼 위원회&#39;가 20개월 동안 2000만달러를 투입해 벌인 조사의&nbsp;결과가 발표됐다. 이른바 &lt;미첼 리포트&gt;에는 금지약물을 사용한 88명&nbsp;메이저리거(현역 38명)의 이름이 적혀 있다.</p>

<p><a href="http://sports.espn.go.com/mlb/news/story?id=3153646">[ESPN] 미첼 리포트&nbsp;명단</a><a href="http://sports.espn.go.com/mlb/news/story?id=3153646">&nbsp;</a></p>

<p>가장 충격적인 이름은 역시 로저 클레멘스(45)다. 만약 클레멘스가 없없더라면, 충격은 이렇게까지 크지 않았을지도 모른다.</p>

<p>클레멘스가 누군가. 사이영상을 7번이나 받은 살아있는 전설이 아닌가.&nbsp;1920년 공에 반발력이 생긴 후, 즉 라이브볼 시대가 열린 이후, 클레멘스(354)보다 더 많은 승리를 따낸 투수는 워렌 스판(363)뿐이다. 클레멘스(4672)보다 더 많은 삼진을 잡아낸 투수는 놀란 라이언(5714)밖에 없다. 많은 사람들이 &#39;라이브볼 시대 최고의 투수&#39;로 클레멘스를 꼽는 데 주저하지 않았던 것은 당연했다.</p>

<p>&lt;미첼 보고서&gt;에 따르면, 1998년 클레멘스는 팀 동료가 된 자칭 &#39;스테로이드의 전도사&#39; 호세 칸세코에게 다가가 금지약물 복용의 효과에 대해 물었다(클레멘스는 칸세코 자서전에서&nbsp;&#39;의심 선수&#39;로 분류됐었다). 시애틀 원정에서 돌아온&nbsp;5월초, 클레멘스는 트레이너 브라이언 맥나미에게 스테로이드를 구해줄 것을 부탁했고, 자신이 묵었던 스카이돔 아파트에서 건네 받았다.</p>

<p>클레멘스는 자신이 직접 주사를 놓지 못하겠다며 맥나미에게 도움을 청했다. 그때마다 맥나미는 클레멘스의 아파트를 방문해&nbsp;&#39;윈스트롤&#39;을 주사해줬다. 맥나미가 기억하고 있는 횟수는 4번. 클레멘스는 맥나미에게 &#39;효과가 대단히 좋더라&#39;고 말하기까지 했다.</p>

<p>클레멘스는 1999년 양키스로 옮겼다.&nbsp;맥나미는 클레멘스의 추천에 힘입어&nbsp;양키스의 전속 트레이너가 됐다. 맥나미는 양키스 구단뿐 아니라 클레멘스로부터도 급여를 지급받았다. 맥나미는 클레멘스가 잠시 약물을 끊기도 했지만 2000시즌 중반부터 다시 사용했으며, 2001시즌 자신이 양키스를 떠나기 전까지는 계속 사용했다고 밝혔다.</p>

<p>이것이&nbsp;맥나미의 증언 내용이다.&nbsp;클레멘스는 현재 이를 강력히 부인하고 있다. 맥나미가 연방수사관의 강압에 못이겨 거짓 증언을 한 것이며, 자신은 약물검사에 걸린 적이 한 번도 없다는 주장이다. 하지만 맥나미의 증언이 사실이라면, 클레멘스가 이룬 업적은 상당 부분 허상이 된다.</p>

<p>1986년부터 1992년까지 7년 간, 클레멘스는 136승63패(연평균 19승9패) 평균자책점 2.65에 3번의 사이영상과 1번의 리그&nbsp;MVP를&nbsp;거머쥐며 메이저리그를 대표하는 에이스가 됐다. 하지만 이후 부상에 시달리면서 급격히 추락했고, 1993년부터&nbsp;1996년까지 4년 간 40승39패 평균자책점 3.77에 그쳤다. 이에 보스턴 레드삭스 댄 두켓 단장은 클레멘스와의 재계약을 포기했다.</p>

<p>그러나 토론토 블루제이스에 입단한 클레멘스는, 두켓의 예상과 달리&nbsp;1997년을 생애 최고의 시즌으로 만들며&nbsp;트리플 크라운과 사이영상을 석권했다(21승7패 2.05). 이듬해에도 2년 연속 사이영상과 2년 연속 트리플 크라운(20승6패 2.65). 그리고 1999년 양키스에 입단하는 것으로&nbsp;두켓을 바보로 만들었다.</p>

<p>지금까지 1997년 클레멘스의 대변신에는 스플리터 개발이 결정적이었던 것으로 알려져 왔다. 또 마흔이 넘어서도 강속구를 뿌릴 수 있었던 것은 타고난 신체와 철저한 자기관리 덕분으로 여겨졌다. 최소한 클레멘스가 &#39;제2의 전성기&#39;를 자신의 힘으로 연 것만큼은 사실로 보인다. 금지약물 복용시점이 1997년이 아닌 1998년이기 때문이다.&nbsp;클레멘스의 1997년은 1998년보다 더 화려했다.</p>

<p>하지만 1998년 후반기의 질주(16경기 8승6패 3.77 후&nbsp;17경기 12승무패 1.77). 그리고 양키스 입단 후 1999년(14승10패 4.60)과&nbsp;2000년 초반(13경기 4승6패 4.82)까지 계속 부진을 이어가다 7월 이후 대반전(18경기 9승2패 3.00)을 이루고 이듬해 6번째 사이영상을 따낸 장면(20승3패 3.51)은, 바로 맥나미가 말한 약물의 최초 사용 시점, 그리고 재사용 시점과 딱 맞아떨어진다.</p>

<p>그렇다면 휴스턴 애스트로스로 건너가 2004년 41살의 나이로 따낸 7번째 사이영상(18승4패 2.98)과 이듬해 42살의 나이로 오른 평균자책점 1위(13승8패 1.87) 역시 약물의 힘이 아니라고 할 수 없다. 공교롭게도 클레멘스는 약물 검사가 강화된 지난해 풀 시즌을 포기했고, 돌아와서는 전과 같지 않았다.</p>

<p>약물의 도움을 받은 게 사실이라면, 클레멘스는 1997년 재기에 성공한 것은 맞을지 몰라도&nbsp;2000년 7월 이후에 보여준 모습은 거짓일 수도 있다. 약물을 사용하지 않았다면 양키스 입단 후의 부진을 끝으로 사라지게 됐을 지도 모른다.</p>

<p>성급하게 1998년 이후의 클레멘스를 오로지 약물로 규정하는 것은 잘못일지도 모른다. 그는 그 전에도 위대한 투수였다. 하지만 역시 약물 복용 이전에 이미 명예의 전당 티켓을 따놨으며, 약물 문제가 터진 후에도 괴력을 선보인 배리 본즈가 받는 비난처럼, 문제는 정정당당하지 못했다는 데 있다.</p>

<p>2007년 12월14일. 클레멘스는 명예를 잃었다. 그리고 우리는 영웅을 잃었다.</p>

<p><img width="566" height="81" src="https://i.froala.com/download/938e04c11a9661155a87df1ca5cbb87f65465e2a.?1498200743" class="fr-fic fr-dii"></p>

<p>
	<br>
</p>

<p>기자 : 김형준 generlst@naver.com, 제공 : 김형준 칼럼</p>

<p>&nbsp;</p>

<p><a href="http://post.naver.com/my.nhn?memberNo=4792906">김형준 기자 포스트 바로가기</a></p>

<p>김형준</p>

<p>MBC스포츠플러스 메이저리그 해설위원</p>

<p>7</p>

<p>SNS공유하기</p>

<p><a href="http://m.sports.naver.com/column/columnList.nhn?expertId=214">김형준 칼럼 기사 목록 보기</a></p>

<p>
	<a href="http://m.post.naver.com/viewer/postView.nhn?volumeNo=4387573&memberNo=1156373"><img width="133" height="13" src="https://i.froala.com/download/4ddcba76febf3f67c6fcf212bfac372c9c9fe0ad.?1498200742" class="fr-fic fr-dii"></a>
	<br>
</p>

<h3>야구 많이 본 영상</h3>

<p><a href="http://m.sports.naver.com/video.nhn?id=202296&type=1">&#39;댓글 봤네 봤어&#39; 오늘도 이어지는 정근우의 훈남 포스</a>&nbsp;</p>

<p><a href="http://m.sports.naver.com/video.nhn?id=202296&type=1">조회수</a><a href="http://m.sports.naver.com/video.nhn?id=202296&type=1">111,719</a>&nbsp;</p>

<p><a href="http://m.sports.naver.com/video.nhn?id=202296&type=1">영상뉴스</a>
	<a href="http://m.sports.naver.com/video.nhn?id=202296&type=1"><img width="290" height="180" src="https://i.froala.com/download/4bd35052272d550fa62797c1f28e220379d04409.?1498200743" class="fr-fic fr-dii"></a>&nbsp;</p>

<p><a href="http://m.sports.naver.com/video.nhn?id=202319&type=1">광주를 열광케하는 김호령, 게임을 끝내는 기막힌 호수비</a>&nbsp;</p>

<p><a href="http://m.sports.naver.com/video.nhn?id=202319&type=1">조회수</a><a href="http://m.sports.naver.com/video.nhn?id=202319&type=1">117,776</a>&nbsp;</p>

<p><a href="http://m.sports.naver.com/video.nhn?id=202319&type=1">영상뉴스</a>
	<a href="http://m.sports.naver.com/video.nhn?id=202319&type=1"><img width="290" height="180" src="https://i.froala.com/download/dacb6be01f22d869993d032ed5de15dcc145c581.?1498200742" class="fr-fic fr-dii"></a>&nbsp;</p>

<p><a href="http://m.sports.naver.com/video.nhn?id=202323&type=2">&#39;양현종 3승 역투&#39; KIA, 롯데 꺾고 2연속 위닝시리즈</a>&nbsp;</p>

<p><a href="http://m.sports.naver.com/video.nhn?id=202323&type=2">조회수</a><a href="http://m.sports.naver.com/video.nhn?id=202323&type=2">85,228</a>&nbsp;</p>

<p><a href="http://m.sports.naver.com/video.nhn?id=202323&type=2">영상뉴스</a>
	<a href="http://m.sports.naver.com/video.nhn?id=202323&type=2"><img width="290" height="180" src="https://i.froala.com/download/419f6e5d77966f3843dcf7e92ad3107bf02e41d8.?1498200743" class="fr-fic fr-dii"></a>&nbsp;</p>

<p><a href="http://m.sports.naver.com/video.nhn?id=202318&type=1">정근우, 최금강에겐 살겠다는 투지</a>&nbsp;</p>

<p><a href="http://m.sports.naver.com/video.nhn?id=202318&type=1">조회수</a><a href="http://m.sports.naver.com/video.nhn?id=202318&type=1">105,797</a>&nbsp;</p>

<p><a href="http://m.sports.naver.com/video.nhn?id=202318&type=1">영상뉴스</a>
	<a href="http://m.sports.naver.com/video.nhn?id=202318&type=1"><img width="290" height="180" src="https://i.froala.com/download/9cc94a106ab79fa38eebf625da06de69ddd57c43.?1498200742" class="fr-fic fr-dii"></a>&nbsp;</p>

<p><a href="http://m.sports.naver.com/video.nhn?id=202344&type=1">&#39;완벽 그 자체&#39; 김광현, 13K 완투승</a>&nbsp;</p>

<p><a href="http://m.sports.naver.com/video.nhn?id=202344&type=1">조회수</a><a href="http://m.sports.naver.com/video.nhn?id=202344&type=1">51,737</a>&nbsp;</p>

<p><a href="http://m.sports.naver.com/video.nhn?id=202344&type=1">영상뉴스</a>
	<a href="http://m.sports.naver.com/video.nhn?id=202344&type=1"><img width="290" height="180" src="https://i.froala.com/download/cd37d9aa82aaa856c4dd1145a9fa751c4a7cbd82.?1498200743" class="fr-fic fr-dii"></a>&nbsp;</p>

<p><a href="http://m.sports.naver.com/video.nhn?id=202350&type=2">NC-한화, 연장 12회 접전 끝에 무승부</a>&nbsp;</p>

<p><a href="http://m.sports.naver.com/video.nhn?id=202350&type=2">조회수</a><a href="http://m.sports.naver.com/video.nhn?id=202350&type=2">36,455</a>&nbsp;</p>

<p><a href="http://m.sports.naver.com/video.nhn?id=202350&type=2">영상뉴스</a>
	<a href="http://m.sports.naver.com/video.nhn?id=202350&type=2"><img width="290" height="180" src="https://i.froala.com/download/b2d230e5a88b8faad20bb929a6aadbbc42c43753.?1498200743" class="fr-fic fr-dii"></a>&nbsp;</p>

<p><a href="http://m.sports.naver.com/video.nhn?id=202341&type=1">&#39;계속 이어지는 기적의 투구&#39; 원종현 KKK</a>&nbsp;</p>

<p><a href="http://m.sports.naver.com/video.nhn?id=202341&type=1">조회수</a><a href="http://m.sports.naver.com/video.nhn?id=202341&type=1">42,240</a>&nbsp;</p>

<p><a href="http://m.sports.naver.com/video.nhn?id=202341&type=1">영상뉴스</a>
	<a href="http://m.sports.naver.com/video.nhn?id=202341&type=1"><img width="290" height="180" src="https://i.froala.com/download/c5d89e9d327091ba9f23d35cae7f6b98cbb5efa2.?1498200743" class="fr-fic fr-dii"></a>&nbsp;</p>

<p><a href="http://m.sports.naver.com/video.nhn?id=189504&type=1">&#39;프로답지 못한 모습&#39; 만원 관중 앞 안타까운 벤치클리어링</a>&nbsp;</p>

<p><a href="http://m.sports.naver.com/video.nhn?id=189504&type=1">조회수</a><a href="http://m.sports.naver.com/video.nhn?id=189504&type=1">1,337,384</a>&nbsp;</p>

<p><a href="http://m.sports.naver.com/video.nhn?id=189504&type=1">영상뉴스</a>
	<a href="http://m.sports.naver.com/video.nhn?id=189504&type=1"><img width="290" height="180" src="https://i.froala.com/download/2169a591934115f53c65ec021ed27a04eac4e305.?1498200744" class="fr-fic fr-dii"></a>&nbsp;</p>

<p><a href="http://m.sports.naver.com/video.nhn?id=202327&type=2">&#39;김광현 13K 완투승&#39; SK, LG 꺾고 2연승</a>&nbsp;</p>

<p><a href="http://m.sports.naver.com/video.nhn?id=202327&type=2">조회수</a><a href="http://m.sports.naver.com/video.nhn?id=202327&type=2">47,660</a>&nbsp;</p>

<p><a href="http://m.sports.naver.com/video.nhn?id=202327&type=2">영상뉴스</a>
	<a href="http://m.sports.naver.com/video.nhn?id=202327&type=2"><img width="290" height="180" src="https://i.froala.com/download/e683d8c7329cda8209e6aa4a4e742ac4fd204209.?1498200744" class="fr-fic fr-dii"></a>&nbsp;</p>

<p><a href="http://m.sports.naver.com/video.nhn?id=202333&type=2">삼성, 넥센 잡고 4연패 탈출</a>&nbsp;</p>

<p><a href="http://m.sports.naver.com/video.nhn?id=202333&type=2">조회수</a><a href="http://m.sports.naver.com/video.nhn?id=202333&type=2">37,588</a>&nbsp;</p>

<p><a href="http://m.sports.naver.com/video.nhn?id=202333&type=2">영상뉴스</a>
	<a href="http://m.sports.naver.com/video.nhn?id=202333&type=2"><img width="290" height="180" src="https://i.froala.com/download/9add9effb0fcd551574fc4548ccd1a7eae400e1d.?1498200744" class="fr-fic fr-dii"></a>&nbsp;</p>

<h3>야구 많이 본 뉴스</h3>

<p><a href="http://m.sports.naver.com/kbaseball/news/read.nhn?oid=241&aid=0002569913">1</a>&nbsp;</p>

<p>
	<a href="http://m.sports.naver.com/kbaseball/news/read.nhn?oid=241&aid=0002569913"><img width="88" height="55" src="https://i.froala.com/download/4d88498f4b1fdeba24131a42b91184b98d288c6e.?1498200743" class="fr-fic fr-dii"></a>&nbsp;</p>

<p><a href="http://m.sports.naver.com/kbaseball/news/read.nhn?oid=241&aid=0002569913">한화 로저스, 팔꿈치 수술하나...구단 &quot;결정된 바 없다&quot;</a>
	<a href="http://m.sports.naver.com/kbaseball/news/read.nhn?oid=241&aid=0002569913">27,295</a>&nbsp;</p>

<p><a href="http://m.sports.naver.com/kbaseball/news/read.nhn?oid=109&aid=0003344389">2</a>&nbsp;</p>

<p>
	<a href="http://m.sports.naver.com/kbaseball/news/read.nhn?oid=109&aid=0003344389"><img width="88" height="55" src="https://i.froala.com/download/4138527d98067dbae97c9170cded785a44bded6c.?1498200743" class="fr-fic fr-dii"></a>&nbsp;</p>

<p><a href="http://m.sports.naver.com/kbaseball/news/read.nhn?oid=109&aid=0003344389">슬라이더 진화? 김광현, MLB 시선 붙잡다</a>
	<a href="http://m.sports.naver.com/kbaseball/news/read.nhn?oid=109&aid=0003344389">31,970</a>&nbsp;</p>

<p><a href="http://m.sports.naver.com/kbaseball/news/read.nhn?oid=459&aid=0000000156">3</a>&nbsp;</p>

<p>
	<a href="http://m.sports.naver.com/kbaseball/news/read.nhn?oid=459&aid=0000000156"><img width="88" height="55" src="https://i.froala.com/download/c17826be81062b3a65f0102804dd5a1260bfe2fe.?1498200743" class="fr-fic fr-dii"></a>&nbsp;</p>

<p><a href="http://m.sports.naver.com/kbaseball/news/read.nhn?oid=459&aid=0000000156">[홍희정의 아웃사이더 ]결단과 선택의 갈림길, 신인 1차 지명 &lt;2편&gt; 수도권 5팀</a>
	<a href="http://m.sports.naver.com/kbaseball/news/read.nhn?oid=459&aid=0000000156">15,076</a>&nbsp;</p>

<p><a href="http://m.sports.naver.com/kbaseball/news/read.nhn?oid=396&aid=0000394987">4</a>&nbsp;</p>

<p>
	<a href="http://m.sports.naver.com/kbaseball/news/read.nhn?oid=396&aid=0000394987"><img width="88" height="55" src="https://i.froala.com/download/c14f7f8560c50f7b3cecbcdcce854fc4b7119454.?1498200744" class="fr-fic fr-dii"></a>&nbsp;</p>

<p><a href="http://m.sports.naver.com/kbaseball/news/read.nhn?oid=396&aid=0000394987">완벽했던 ML 쇼케이스, 美스카우트 &quot;김광현은 전형적인 ML 선발감&quot; 극찬</a>
	<a href="http://m.sports.naver.com/kbaseball/news/read.nhn?oid=396&aid=0000394987">13,997</a>&nbsp;</p>

<p><a href="http://m.sports.naver.com/kbaseball/news/read.nhn?oid=109&aid=0003344396">5</a>&nbsp;</p>

<p>
	<a href="http://m.sports.naver.com/kbaseball/news/read.nhn?oid=109&aid=0003344396"><img width="88" height="55" src="https://i.froala.com/download/fde5fe9e2a70ae85f69e5d9d1e21b8e0a8ce38d7.?1498200744" class="fr-fic fr-dii"></a>&nbsp;</p>

<p><a href="http://m.sports.naver.com/kbaseball/news/read.nhn?oid=109&aid=0003344396">한화 불펜야구, 선발보다 92⅔이닝 더 던졌다</a>
	<a href="http://m.sports.naver.com/kbaseball/news/read.nhn?oid=109&aid=0003344396">15,989</a>&nbsp;</p>

<h3>야구 댓글 많은 뉴스</h3>

<p><a href="http://m.sports.naver.com/kbaseball/news/read.nhn?oid=109&aid=0003344396">1</a>&nbsp;</p>

<p>
	<a href="http://m.sports.naver.com/kbaseball/news/read.nhn?oid=109&aid=0003344396"><img width="88" height="55" src="https://i.froala.com/download/92b6d34a5720aceb365fb07ae9a361f7ee01d02e.?1498200744" class="fr-fic fr-dii"></a>&nbsp;</p>

<p><a href="http://m.sports.naver.com/kbaseball/news/read.nhn?oid=109&aid=0003344396">한화 불펜야구, 선발보다 92⅔이닝 더 던졌다</a><a href="http://m.sports.naver.com/kbaseball/news/read.nhn?oid=109&aid=0003344396">+384</a>&nbsp;</p>

<p><a href="http://m.sports.naver.com/kbaseball/news/read.nhn?oid=241&aid=0002569913">2</a>&nbsp;</p>

<p>
	<a href="http://m.sports.naver.com/kbaseball/news/read.nhn?oid=241&aid=0002569913"><img width="88" height="55" src="https://i.froala.com/download/05a4139c135fc0d2e8021ee00f6936ba78bd8937.?1498200744" class="fr-fic fr-dii"></a>&nbsp;</p>

<p><a href="http://m.sports.naver.com/kbaseball/news/read.nhn?oid=241&aid=0002569913">한화 로저스, 팔꿈치 수술하나...구단 &quot;결정된 바 없다&quot;</a><a href="http://m.sports.naver.com/kbaseball/news/read.nhn?oid=241&aid=0002569913">+309</a>&nbsp;</p>

<p><a href="http://m.sports.naver.com/kbaseball/news/read.nhn?oid=109&aid=0003344389">3</a>&nbsp;</p>

<p>
	<a href="http://m.sports.naver.com/kbaseball/news/read.nhn?oid=109&aid=0003344389"><img width="88" height="55" src="https://i.froala.com/download/4a8ff6e62b255475ee7c4b4cd99b6df618a8be06.?1498200744" class="fr-fic fr-dii"></a>&nbsp;</p>

<p><a href="http://m.sports.naver.com/kbaseball/news/read.nhn?oid=109&aid=0003344389">슬라이더 진화? 김광현, MLB 시선 붙잡다</a><a href="http://m.sports.naver.com/kbaseball/news/read.nhn?oid=109&aid=0003344389">+272</a>&nbsp;</p>

<p><a href="http://m.sports.naver.com/kbaseball/news/read.nhn?oid=396&aid=0000394987">4</a>&nbsp;</p>

<p>
	<a href="http://m.sports.naver.com/kbaseball/news/read.nhn?oid=396&aid=0000394987"><img width="88" height="55" src="https://i.froala.com/download/88aca226e3483d1080603d17047d2f9875495feb.?1498200744" class="fr-fic fr-dii"></a>&nbsp;</p>

<p><a href="http://m.sports.naver.com/kbaseball/news/read.nhn?oid=396&aid=0000394987">완벽했던 ML 쇼케이스, 美스카우트 &quot;김광현은 전형적인 ML 선발감&quot; 극찬</a><a href="http://m.sports.naver.com/kbaseball/news/read.nhn?oid=396&aid=0000394987">+217</a>&nbsp;</p>

<p><a href="http://m.sports.naver.com/kbaseball/news/read.nhn?oid=109&aid=0003344388">5</a>&nbsp;</p>

<p>
	<a href="http://m.sports.naver.com/kbaseball/news/read.nhn?oid=109&aid=0003344388"><img width="88" height="55" src="https://i.froala.com/download/b4920ef3045592ae35f3136c636561d2300513d7.?1498200744" class="fr-fic fr-dii"></a>&nbsp;</p>

<p><a href="http://m.sports.naver.com/kbaseball/news/read.nhn?oid=109&aid=0003344388">공들이는 롯데, &#39;고교 최대어&rsquo; 윤성빈 선택은?</a><a href="http://m.sports.naver.com/kbaseball/news/read.nhn?oid=109&aid=0003344388">+169</a>&nbsp;</p>

<h2>오늘의 경기</h2>

<p>6.24(금) SCORE OFF</p>

<p><img width="34" height="34" src="https://i.froala.com/download/20dd530cd7ec31ca114ec6b10de78de1f40cd719.?1498200744" class="fr-fic fr-dii"></p>

<p>맨위로</p>

<dl>
	<dt><a href="http://m.sports.naver.com/kbaseball/index.nhn">야구</a></dt>
</dl>

<dl>
	<dd><a href="http://m.sports.naver.com/kbaseball/news/index.nhn">뉴스</a></dd>
</dl>

<dl>
	<dd><a href="http://m.sports.naver.com/kbaseball/vod/index.nhn">영상</a></dd>
</dl>

<dl>
	<dd><a href="http://m.sports.naver.com/kbaseball/photocenter/index.nhn">포토</a></dd>
</dl>

<dl>
	<dd><a href="http://m.sports.naver.com/kbaseball/schedule/index.nhn">일정</a></dd>
</dl>

<dl>
	<dd><a href="http://m.sports.naver.com/kbaseball/record/index.nhn">순위</a></dd>
</dl>

<p>맨위로</p>

<p><a href="http://m.post.naver.com/viewer/postView.nhn?volumeNo=4508502&memberNo=1156373">공지</a><a href="http://m.post.naver.com/viewer/postView.nhn?volumeNo=4508502&memberNo=1156373">네이버스포츠 TV중계 편성 - 06/20(월)~06/26(일)</a></p>

<p><a href="http://m.sports.naver.com/index.nhn">스포츠홈</a></p>

<p><a href="http://m.sports.naver.com/kbaseball/index.nhn">야구</a></p>

<p><a href="http://m.sports.naver.com/wbaseball/index.nhn">해외야구</a></p>

<p><a href="http://m.sports.naver.com/kfootball/index.nhn">축구</a></p>

<p><a href="http://m.sports.naver.com/wfootball/index.nhn">해외축구</a></p>

<p><a href="http://m.sports.naver.com/basketball/index.nhn">농구</a></p>

<p><a href="http://m.sports.naver.com/volleyball/index.nhn">배구</a></p>

<p><a href="http://m.sports.naver.com/golf/index.nhn">골프</a></p>

<p><a href="http://m.sports.naver.com/general/index.nhn">일반</a></p>

<p><a href="http://m.sports.naver.com/esports/index.nhn">e스포츠&amp;게임</a></p>

<p><a href="http://m.sports.naver.com/comment/bestcomment.nhn">베스트댓글</a></p>

<p><a href="http://m.sports.naver.com/radio/home.nhn">라디오</a></p>

<p>로그아웃 PC버전 <a href="http://m.naver.com/services/app">전체 앱</a>
	<a href="http://m.naver.com/services.html?f=svc.sports">전체서비스</a></p>

<p>본 콘텐츠의 저작권은 네이버 및 제공처에 있으며, 이를 이용하는 경우 저작권법 등에 따라 법적책임을 질 수 있습니다.</p>

<p><a href="https://m.help.naver.com/support/service/main.nhn?serviceNo=5610">스포츠 고객센터</a>
	<a href="https://m.help.naver.com/support/issue/report.nhn?serviceNo=5610">오류신고</a></p>

<p>&copy; <a href="http://www.navercorp.com/">NAVER Corp.</a></p>`,
};
mockObj[19] = {
	title: '더팩트 - [TF인터뷰] 채이배 "난 재벌 해체 주의자 아니다" <하>',
	tags: ['한국', '경제', '논쟁'],
	is_publish: false,
	data: `<p>&lt;상&gt; 편에 계속</p>

<p>[더팩트ㅣ국회=이철영 기자] 채이배(42, 정무위원회) 국민의당 의원은 &quot;국내 대기업들은 오너가 없으면 아무것도 못한다. 그만큼 오너 의존적이라는 것이고 그만큼 후진적이라는 것&quot;고 반드시 개선해야 한다고 했다.</p>

<p>채 의원은 20대 국회 국민의당 비례대표로 여의도에 입성했다. 그는 국민의당 비례대표 6번을 받으면서부터 정치권과 재계의 관심을 한몸에 받았다. 회계 전문가로 20년간 기업지배구조 개선 시민운동을 해온 이력 때문이다.</p>

<p>그는 국내 대기업의 지배구조, 재벌의 문제를 누구보다 잘 안다. 재계가 긴장하는 이유도 여기에 있다. 채 의원은 &quot;제가 &#39;재벌 저격수&#39; &#39;반시장주의자&#39;라고 하는데 그렇지 않다&quot;고 웃으며 말했다. 그는 자신의 이름 앞에 붙은 단어가 불편하다고 했다.</p>

<p>&lt;더팩트&gt;는 14일 오후 채 의원을 국회 의원회관 의원실에서 만났다. 1시간 넘게 진행된 인터뷰에서는 재벌 개혁과 지배구조의 문제 그리고 최근 논란이 일고 있는 롯데 사태 등을 들었다.</p>

<p><img width="15" height="15" name="en-media:image/gif:a32e3d69763a3ea595d023e7c421803d:none:none" src="https://i.froala.com/download/c22600b660caff06d80ac963dded3fe194613e86.?1498200805" class="fr-fic fr-dii"></p>

<p><img width="640" height="439" name="en-media:image/jpeg:02739a294990b15ff1848a3cea3ea77c:none:none" src="https://i.froala.com/download/8e5f60807f1a486d6bc9d6a026b0dfbb37db7015.?1498200806" class="fr-fic fr-dii"></p>

<p>채 의원이 국내 대기업의 가장 큰 문제는 오너리스크다라며 웃고 있다.</p>

<p>◆대기업 오너, 권한 만큼 책임 져라!</p>

<p>채 의원은 누가 뭐래도 기업지배구조 전문가다. 그는 20년간 재벌개혁, 기업지배구조 개선을 위해 시민운동가로 활동했다. 채 의원은 국내 대기업의 가장 문제로 &#39;오너리스크&#39;를 꼽았다.</p>

<p>오너가 구속될 경우 기업이 아무런 결정을 하지 못하는 웃지 못할 상황들이 반복되는 것을 개선해야 한다는 것이 그의 주장이다.</p>

<p>국내 대기업의 가장 큰 문제가 무엇이냐고 묻자 채 의원은 &quot;오너리스크다&quot;라고 망설임 없이 답했다.</p>

<p>채 의원은 &quot;단 몇 % 지분을 가지고 있지 않은 지배주주들이 모든 의사결정을 다한다. 전횡적인 의사결정이라고 표현한다&quot;면서 &quot;예를 들어 총수가 감옥에 가면 기업들이 우린 아무것도 결정 못 한다고 이야기한다. 얼마나 기업이 문제가 있는 거냐?&quot;라고 혀를 찼다.</p>

<p>오너리스크에 대해 그는 심각한 표정으로 &quot;(오너리스크) 이를 해결하는 방법으로는 권한과 책임의 대등할 수 있도록 하는 것&quot;이라면서 &quot;권한 만큼 책임을 지고 책임만큼 권한을 가지라는 것이다. 50% 지분을 가졌으면 50%의 권한을 행사하고 잘못했으면 응당 형사든 민사든 책임져야 한다&quot;고 주장했다.</p>

<p>그러면서 &quot;그런데 우리나라는 4%의 지분을 가진 대주주가 100% 의사결정을 하고 미등기임원이라며 책임은 또 빠져나간다. 소송에 걸려도 빠져나가고 진짜 어렵게 처벌을 받아도 사면권으로 빼주고. 권한 행사와 책임이 전혀 이루어지지 않는 것이다. 이게 개선되어야 한다고 본다&quot;고 강조했다.</p>

<p><img width="640" height="418" name="en-media:image/jpeg:b7928f716bfd72c0a1f1a0d6fe92bf68:none:none" src="https://i.froala.com/download/80f0ffbe7df172e6cbc34e088dbde46aaf8ea4d0.?1498200805" class="fr-fic fr-dii"></p>

<p>채 의원은 대기업의 가족승계 문제는 어쩔 수 없지만, 그것에 대한 여지는 점점 줄어들고 있고, 전문경영인의 여지가 넓어지고 있다. 하루아침에 가족승계 끝 이런 건 될 수 없다고 말했다.</p>

<p>오너리스크 문제는 하루 이틀 일이 아니다. 재계가 사회적으로 지탄을 받는 이유이기도 하다. 그런데도 달라진 것이 별로 없다고 보는 시각이 지배적이다. 채 의원 역시 이 부분에 대해서 답답한 표정을 지었다. 그러나 채 의원은 근래 대기업들의 상황을 예시 주시한 결과 조금씩 변화가 감지되고 있다고 했다.</p>

<p>채 의원은 &quot;(재벌들이) 하루아침에 나아질 수 있는 것으로 보진 않는다. 세대교체가 되면서 조금씩 나아지고 있다. 삼성도 이건희 회장에서 이재용 부회장으로, 현대는 정몽구 회장에서 정의선 부회장으로 교체되면서 개선되고 있다고 저는 생각한다&quot;며 &quot;사람이 바뀌어서도 그렇지만, 중요한 건 시대적 환경이 바뀌어서도 그렇다. 요구하는 게 많아지고 그 사람들도 받아들일 수 있는 마음이 생겼다. 서서히 바뀌고 있다고 생각한다. 다만, 부족한 부분은 채찍질해야 한다. 더 채근해서 더 빨리 바뀌게 해야 한다&quot;고 앞으로 재벌 개혁에도 나설 뜻을 분명히 밝혔다.</p>

<p>채 의원의 말을 들으면서도 동의하지 못하는 부분이 있었다. 변화하고 있지만, 결국엔 가족승계로 이어지는 부문이다. 부의 대물림 과정에서 숱한 부정이 있었던 것을 지켜봤기 때문이다. 그는 가족승계 역시 변화할 것으로 내다봤다.</p>

<p>그는 &quot;예를 들어 예전에는 이건희 회장이 모든 걸 다 결정했다면 지금 이재용 부회장은 그러지 않을 것으로 본다. 점점 전문경영인들이 포진되고 참모들에 의해 결정들이 이뤄지고 있다&quot;며 &quot;과거에도 이건희 회장 옆에 참모들이 있었지만, 그때는 따라가는 정도였다. 그런데 지금은 그런 식은 아닌 것 같다. 삼성의 구조조정 모습을 보면 예전 스타일은 아니다&quot;고 설명했다.</p>

<p>이어 &quot;(대기업들의) 가족승계는 어쩔 수 없지만, 그것에 대한 여지는 점점 줄어들고 있고, 전문경영인의 여지가 넓어지고 있다. 하루아침에 &#39;가족승계 끝&#39; 이런 건 될 수 없다&quot;면서 &quot;대기업들도 점점 전문기업화 전문경영인화되고 있다. 자기들도 생존하기 위해서는 필요하다고 인식하는 것 같다. 그런 식으로 그룹이 전문기업화되면서 전문성을 가진 경영진들이 더 역할을 할 수 있는 여지들이 생기고 있다&quot;며 시간이 필요하다고 했다.</p>

<p><img width="640" height="940" name="en-media:image/jpeg:d50a35abe35ce24082ff5127ee4c6c2a:none:none" src="https://i.froala.com/download/60dad3b64fc2dfded96e7f9a6da5544b8e81c9e4.?1498200806" class="fr-fic fr-dii"></p>

<p>그는 롯데그룹 사태와 관련해 급여가 과도한 것이 문제인 거지 그거 자체가 비자금이거나 더 나쁜 배임이나 횡령으로 바라볼 문제는 아니다고 보았다.</p>

<p>◆롯데 사태, 비자금&middot;배임&middot;횡령으로 바라볼 문제 아냐</p>

<p>채 의원에게 최근 롯데그룹을 둘러싼 논란에 관해 묻지 않을 수 없었다. 롯데그룹 파문과 관련해 나오는 내용을 보면 오너일가에 대한 과도한 배당금 그리고 비자금 조성 등으로 요약할 수 있다.</p>

<p>채 의원은 롯데그룹 문제가 지나치게 확대해 해석된 경향이 있다는 시각을 보였다. 왜, 일까.</p>

<p>그는 &quot;형제의 난 문제가 불거졌을 때 롯데가 일본 기업이냐? 한국 기업이냐? 국적 논란으로 이상하게 방향이 틀어졌다&quot;며 &quot;승계 과정에서 정당한 경쟁 없이 누군가가 경영권을 이양받는 것이 더 위험하다. 그런 면에서 롯데는 두 형제가 나름 경쟁했다. 남들은 분쟁이라고 하지만 전 경쟁이라고 본다. 둘이 다툰 거다. 경쟁해서 더 좋은 평가를 받는 사람이 선택되는 것이었다. 그런데 선택의 주체가 주주들이어야 하는데 임원들이 누구에게 줄 서느냐로 변질했다&quot;고 분석했다.</p>

<p>또 &quot;기업을 운영하는데 경쟁이 없는 것보다 있는 게 좋다. 롯데그룹은 그런 모습이었다. 이걸 나쁘게만 해석하지 말자&quot;는 시각을 보였다.</p>

<p>롯데를 향해 강도 높은 비난과 비판을 쏟아낼지 알았다. 하지만 정반대였다. 채 의원을 향한 반시장주의자나 재벌 저격수라는 별칭이 왜 붙었는지 의심이 될 정도다.</p>

<p>그는 &quot;최근 정운호 게이트 때문에 신영자 씨 뇌물이 나오고 그러면서 검찰이 제2롯데월드 허가와 성남공항 확대하면서 전면 수사를 하는 상황이다. 그런데 지금 나오는 이야기들은 조금 과장되고 있는 부분이 있는 것 같다&quot;고 했다.</p>

<p><img width="640" height="368" name="en-media:image/jpeg:e9c40a6f1340dd031e8d32f0d40c3f09:none:none" src="https://i.froala.com/download/e2e6f054fa79b3ba7886c00fd078d365ceab9754.?1498200806" class="fr-fic fr-dii"></p>

<p>채 의원이 저는 합리적인 대안을 제시하려는 것이지 극단적으로 재벌 해체를 이야기하는 것은 아니다고 자신을 둘러싼 일각의 시선에 대해 해명하고 있다.</p>

<p>채 의원은 &quot;급여 배당 300억 원을 두고 말이 많은데 세금 다 내고 정당하게 가져간 것&quot;이라면서 &quot;급여가 과도한 것이 문제인 거지 그거 자체가 비자금이거나 더 나쁜 배임이나 횡령으로 바라볼 문제는 아니다. 그런데 비자금으로 이름 붙여서 너무 선정적으로 바라보는 것 같다. 검찰 수사를 두고 보고 판단하면 될 것 같다&quot;고 일각에서 제기하는 문제가 과장됐다고 지적했다.</p>

<p>그는 다만, 롯데를 둘러싸고 계속 문제가 제기됐던 하도급업체 불공정거래를 이번 조사를 계기로 개선했으면 한다고 당부했다. 또 &quot;만약 수사결과 배임과 횡령이 있었다면 응당 법적인 처벌과 책임을 엄중하게 물어야 한다&quot;고 롯데그룹 오너들의 책임도 있어야 한다고 했다.</p>

<p>채 의원의 이야기를 듣다 보니 재계에서 긴장하는 이유를 알 수 있을 것 같았다. 재계 그리고 기업지배구조 문제에 대해서 막힘이 없다. 그리고 문제를 해결하려는 의지는 또 결연했다. 20년 시민운동가 내공이 느껴질 정도다.</p>

<p>그리고 그는 &#39;재벌 저격수&#39; &#39;반시장주의자&#39;도 아니었다.</p>

<p>채 의원은 &quot;저는 시장이 잘 작동되도록 하고 기업가치를 극대화 노력하고 그런 것들을 훼손하는 지배주주들의 불법행위나 이런 것들을 막아야 한다고 생각한다&quot;면서 &quot;기업의 정도경영이 기업의 경쟁력을 강화하고 한국 경제의 근간이 된다. 그런 면에서 지나치게 (재벌 저격수, 반시장주의자) 딱지 붙이기는 앞으로 일을 하는데도 부담스러운 부분&quot;이라며 웃었다.</p>

<p>그는 &quot;재벌 입장에서는 제가 이야기하는 것들이 불편할 수는 있겠지만, 저는 합리적인 대안을 제시하려는 것이지 극단적으로 재벌 해체를 이야기하는 것은 아니다. 그래서 기업들도 그런 것에 대해서 제대로 평가해줬으면 좋겠다&quot;며 &quot;시민운동을 했던 입장이 아니라 국회의원으로서 다양한 이해관계자들의 이야기를 들을 것이다. 그렇게 이해해주고 평가해 줬으면 좋겠다&quot;며 재벌들이 자신을 향한 경계를 풀라며 호탕하게 웃었다.</p>

<p><a href="mailto:cuba20@tf.co.kr">cuba20@tf.co.kr</a></p>

<p>&lt;사진=임영무 기자&gt;</p>

<p>AD</p>

<p>0</p>

<p>0</p>

<p>1</p>

<p>댓글0</p>

<p><img width="0" height="0" name="en-media:image/gif:ad4b0f606e0f8465bc4c4c170b37e1a3:none:none" src="https://i.froala.com/download/5ac4d7101aa7ee4c3bd7e4e67d7be09874382216.?1498200805" class="fr-fic fr-dii"></p>

<dl>
	<dt>[인기기사]</dt>
	<dd><a href="http://m.tf.co.kr/read/entertain/1643062.htm"><strong>&middot;</strong> [단독] 정두홍 무술감독, 임금체불로 노동청 신고 당해</a></dd>
	<dd><a href="http://m.tf.co.kr/read/entertain/1643192.htm"><strong>&middot;</strong> [인터뷰] &#39;비밀은 없다&#39; 손예진 &quot;몰입하다 보니 미쳐갔던 것 같다&quot;</a></dd>
	<dd><a href="http://m.tf.co.kr/read/economy/1643205.htm"><strong>&middot;</strong> 안톤 옐친, 예견된 사고? &#39;그랜드 체로키&#39; 기어봉 결함 리콜</a></dd>
	<dd><a href="http://m.tf.co.kr/read/entertain/1643202.htm"><strong>&middot;</strong> 박유천 고소女, 강제성 주장 &quot;화장실 못 나가게 막았다&quot;</a></dd>
	<dd><a href="http://m.tf.co.kr/read/entertain/1643255.htm"><strong>&middot;</strong> [이슈] 김민희-홍상수 감독, 불륜설 제기 &#39;연예가 폭풍 예고&#39;</a></dd>
</dl>

<p>AD</p>

<p>&middot;로또1등 &quot;자동 하지마!&quot; 가장 쉬운방법은?</p>

<p>&middot; [단독] 내가 더팩트 특종 기사에 나온다면?</p>

<p>&middot;로또 당첨번호 미리 정해져? 결과 &quot;충격!&quot;</p>

<p>by Taboolaby Taboola</p>

<p>Sponsored LinksSponsored Links</p>

<p>Promoted LinksPromoted Links</p>

<p>추천기사</p>

<p><span title=" 유인나, 호피무늬 비키니샷…역시 연예계 대표 '베이글녀'">유인나, 호피무늬 비키니샷&hellip;역시 연예계 대표 &#39;베이글녀&#39;</span></p>

<p><span title=" 설리♥최자, 인스타 UP→수위도 UP…이번엔 키스">설리&hearts;최자, 인스타 UP&rarr;수위도 UP&hellip;이번엔 키스</span></p>

<p><span title="[TF포토] 이승철, 부인과 함께 김정은 결혼식 참석">[TF포토] 이승철, 부인과 함께 김정은 결혼식 참석</span></p>

<p><a href="http://m.tf.co.kr/read/entertain/1634333.htm?ref=read_cate" title=' AOA 설현 동창 폭로글 파장…"우리 떠려니 잘 살았네~"'>AOA 설현 동창 폭로글 파장&hellip;&quot;우리 떠려니 잘 살았네~&quot;</a></p>

<p>오늘의 TF컷</p>

<p>
	<a href="http://m.tf.co.kr/tfcut/?category2=entertain"><img width="300" height="512" name="en-media:image/jpeg:8145b5c58a50cac16fda2aea8e02a812:none:none" src="https://i.froala.com/download/fdd6821c898821e44289b491a0c94128a8a80f11.?1498200806" class="fr-fic fr-dii"></a>
</p>

<table style="width: 100%;">
	<tbody>
		<tr>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
		</tr>
		<tr>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
		</tr>
		<tr>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
		</tr>
		<tr>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
			<td style="width: 25.0000%;">
				<br>
			</td>
		</tr>
	</tbody>
</table>`,
};

export default mockObj;
