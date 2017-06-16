// @flow
import React from 'react';
import css from './photoCardSnippet.css';

const makeTagToElement = (tagSet: Array<string>) => {
	const SumTagSet = tagSet.reduce((a: string, b: string) => `${a}#${b}`, '');
	return <p className={css.tagInstance}>{SumTagSet}</p>;
};
type Props = {
  title: string,
  preview: string,
  time?: string,
  tag: Array<string>,
  publish?: number,
  themeColor: string,
  backgroundImage: string,
  handleOnEditor: Function,
};

const CardSnippet = ({
  title = '',
  preview = '',
  time = '2017.08.24',
  tag = [],
  publish,
  themeColor = '#ff3466',
  backgroundImage = '',
  handleOnEditor = () => {},
}: Props) => (
	<div className={css.container} onClick={ () => {handleOnEditor(true)}}>
		<div
			className={css.head}
			style={{
				backgroundImage: `url(${backgroundImage})`,
			}}
		>
			<div className={css.title}>
				<div className={css.block} />
				<div className={css.text}>{title}</div>
			</div>
		</div>
		<div className={css.middle}>
			{preview}
		</div>
		<div className={css.footer}>
			<div className={css.left}>
				{publish &&
				<div className={css.share}>
					<svg width="20px" height="18px" viewBox="0 0 20 18">
						<g
							id="Page-1"
							stroke="none"
							strokeWidth="1"
							fill="none"
							fillRule="evenodd"
							strokeLinejoin="round"
						>
							<g
								id={css.heartSvg}
								transform="translate(-716.000000, -400.000000)"
								stroke={themeColor}
							>
								<g id="Group-5" transform="translate(207.000000, 146.000000)">
									<g id="Group-8" transform="translate(0.000000, -5.000000)">
										<g id="Group-7">
											<g
												id="social-card"
												transform="translate(480.000000, 5.000000)"
											>
												<g
													id="Group-4"
													transform="translate(30.000000, 255.000000)"
												>
													<path
														d="M13.05,0 C10.3661312,4.02455846e-16 9,2.23923445 9,2.23923445 C9,2.23923445 7.65,0 4.95,0 C2.7,2.4492936e-16 -3.75455466e-14,1.79138756 -2.13162821e-14,4.92631579 C-2.13162821e-15,8.50909091 2.7,12.091866 8.78461538,15.954067 C8.85326851,15.9976445 8.93846154,16 9.01538462,16 C9.09230769,16 9.17762318,15.9977878 9.24615385,15.954067 C15.3,12.091866 18,8.50909091 18,4.92631579 C18,1.79138756 15.3884615,-3.46944695e-16 13.05,0 Z"
														id="Path"
													/>
												</g>
											</g>
										</g>
									</g>
								</g>
							</g>
						</g>
					</svg>
					<p className={css.number}>{publish}</p>
				</div>}
			</div>
			<div className={css.right}>
				<div className={css.time}>
					{time}
				</div>
				<div className={css.tag}>
					{makeTagToElement(tag)}
				</div>
			</div>
		</div>
	</div>
);

export default CardSnippet;
