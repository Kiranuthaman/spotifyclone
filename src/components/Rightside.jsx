import { faEllipsis, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Rightside.css";

function Rightside() {
  return (
    <div className="rights-container ms-3 rounded-4 text-white me-2 mt-4">
      <div className="d-flex justify-content-between ms-3 mt-3" id="fixed">
        <h6>Die With a Smile</h6>
        <div>
          <FontAwesomeIcon icon={faEllipsis} className="me-4 ms-5 icon-style" />
          <FontAwesomeIcon icon={faX} className="icon-style" />
        </div>
      </div>
      <div className="mt-5 item-center rounded-4 ms-3 image-container">
        <img
          src="https://imgs.search.brave.com/2aQYzbqUuOwWftziwo_QFDxC_trSXKlR7ErP5BW63vQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFmTUN5VGFhSUwu/anBn"
          className="rounded-4"
          alt="Album Cover"
        />
      </div>
      <div className="mt-3 ms-3">
        <h5>Die With a Smile</h5>
        <p className="mt-0">Lady Gaga and Bruno Mars</p>
      </div>
      <div className="p-3 bg-dark text-light rounded credits-container">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="m-0">Credits</h5>
          <a href="#!" className="text-light text-decoration-none">Show all</a>
        </div>
        <div className="mb-3">
          <h6 className="m-0">Lady Gaga</h6>
          <small>Main Artist, Composer</small>
          <button className="btn btn-outline-light btn-sm mt-2 ms-5 rounded">Follow</button>
        </div>
        <div className="mb-3">
          <h6 className="m-0">Bruno Mars</h6>
          <small className="me-5">Main Artist,Composer</small>
          <button className="btn btn-outline-light btn-sm mt-2 ms-3 rounded">Follow</button>
        </div>
        <div>
          <h6 className="m-0">Dernst</h6>
          <small>Composer,Producer,</small>
          <button className="btn btn-outline-light btn-sm mt-2 ms-5 rounded">Follow</button>
        </div>
      </div>
    </div>
  );
}

export default Rightside;
