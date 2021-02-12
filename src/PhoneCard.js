import React from 'react';

export const PhoneCard = ({phone}) => (
    <li className="thumbnail">
      <a href={`#!/phones/${phone.id}`} className="thumb">
        <img alt={phone.name} src={phone.imageUrl} />
      </a>

      <div className="phones__btn-buy-wrapper">
        <a className="btn btn-success" href="#buy">
          Add
        </a>
      </div>

      <a href={`#!/phones/${phone.id}`}>{phone.name}</a>
      <p>
        {phone.snippet}
      </p>
    </li>
);
