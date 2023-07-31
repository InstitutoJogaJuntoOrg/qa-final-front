import {Cointaner} from './styles'
import NavigationMenuDemo from './profile';

export const Header = () => {
    return (
        <Cointaner>
            <h1>Joga<strong>Junto</strong></h1>
            <ul>
                <li><strong><NavigationMenuDemo /></strong></li>
            </ul>
        </Cointaner>
    )
}