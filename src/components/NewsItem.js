import React from 'react'

const NewsItem = (props) => {

  let { title, description, imgUrl, newsUrl, author, date, source } = props;

  // const MAX_LENGTH = 30;
  // const paragraph = <p className="card-text"><small className="text-muted">By {author ? author : "unknown"} on {new Date(date).toGMTString()}</small></p>;
  // const truncatedParagraph = paragraph.length > MAX_LENGTH
  //   ? paragraph.slice(0, MAX_LENGTH) + "..."
  //   : paragraph;
  return (
    <div className='my-3'>
      <div className="card" style={{ height: '440px' }} >
        <div style={({
          display: 'flex',
          justifyContent: 'flex-end',
          position: 'absolute',
          right: '0'
        })}>
          <span style={{ padding: '1px 1px', backgroundColor: '#1179F7', color: 'white', borderRadius: '20%' }} >{source}</span>
        </div>
        <img src={imgUrl ? imgUrl : "https://media.news9live.com/h-upload/2022/09/08/554180-hbeta1yellow-scaled-1cropped1.jpg"} style={{ maxHeight: '200px' }} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title" style={{ overflow: 'hidden' }}>{title}...</h5>
          <p className="card-text">{description}...</p>
          {/* {truncatedParagraph} */}
          <p className="card-text"><small className="text-muted">By {author ? author : "unknown"} on {new Date(date).toGMTString()}</small></p>
          <a rel="noopener noreferrer" href={newsUrl} target="_blank" style={{ padding: '1px 1px', backgroundColor: '#1179F7', color: 'white', padding: '6px', borderRadius: '5px', textDecoration: 'none', position: 'absolute', bottom: '10px' }}>Read More</a>
        </div>
      </div>
    </div>
  )
}
export default NewsItem




