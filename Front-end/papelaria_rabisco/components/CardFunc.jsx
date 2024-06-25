import Link from 'next/link';

export default function CardFunc(props) {
    return (
        <div className="card p-5 mb-5 ">
            <img src={props.avatar} alt={`${props.first_name} ${props.last_name}`} />
            <div className="card-body">
                <h5 className="card-title">{props.first_name} {props.last_name}</h5>
                <Link legacyBehavior href={`mailto:${props.email}`}>
                    <a className="btn btn-primary">{props.email}</a>
                </Link>
            </div>
        </div>
    );
}
