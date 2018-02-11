import {h} from 'preact';
import {Store} from "../components/Store";
import {HerosState, IHerosItem} from "./heros.register";
import {LoadingSvg} from "../components/icons/Svg";

export function Heros() {
    return (
        <Store
            selector={x => x.heros}
            render={(heros: HerosState) => {
                if (heros.loading) {
                    return (
                        <div>
                            <Hero
                                key={"blank-01"}
                                renderSubject={(className) => <LoadingSvg className={`${className} ${className}--loading`}/> }
                            />
                            <Hero
                                key={"blank-02"}
                                renderSubject={(className) => <LoadingSvg className={`${className} ${className}--loading`}/> }
                            />
                        </div>
                    )
                }
                return (
                    <div>
                        {heros.data.map((hero: IHerosItem) => {
                            return (
                                <Hero
                                    key={hero.id}
                                    ratio={hero.image.large.height / (hero.image.large.width / 100)}
                                    renderSubject={(className) => <img class={className} src={hero.image.large.url} alt=""/> }
                                    renderCta={(className) => <a class={`button ${className}`} href={hero.link.url}>{hero.link.label}</a> }
                                />
                            )
                        })}
                    </div>
                );
            }}
        />
    );
}

export interface HeroProps {
    renderSubject(className: string): void,
    renderCta?(className: string): void,
    key: string,
    ratio?: number
}

export function Hero(props: HeroProps) {
    return (
        <figure
            key={props.key}
            class={"hero"}
            style={{paddingBottom: `${props.ratio || 64}%`}}
        >
            {props.renderSubject('hero__subject')}
            {props.renderCta && props.renderCta('hero__link')}
        </figure>
    );
}
