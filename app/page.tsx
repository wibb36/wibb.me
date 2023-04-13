import { name, about, bio } from '../lib/info';
import { Icon } from '../components';

export default function HomePage() {
    return (
        <section>
            <h1 className="font-bold text-xl mb-5">{name}</h1>
            <p className="my-5 max-w-[500px] text-gray-800 dark:text-gray-200">
                {about()}
            </p>

            <p className="my-5 max-w-[600px] text-gray-800 dark:text-gray-200" >
                {bio()}
            </p>

            <ul className="my-5 flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-gray-500 dark:text-gray-400">
                <li>
                    <a
                        className="flex items-center no-underline transition-all"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://twitter.com/wibb36"
                    >
                        <Icon name='arrow' width={12} height={12} className="mr-2" />
                        <p className="h-7">follow me on twitter</p>
                    </a>
                </li>
                <li>
                    <a
                        className="flex items-center no-underline transition-all"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://wibb.substack.com"
                    >
                        <Icon name='arrow' width={12} height={12} className="mr-2" />
                        <p className="h-7">get email updates</p>
                    </a>
                </li>
            </ul>
        </section >
    );
}
