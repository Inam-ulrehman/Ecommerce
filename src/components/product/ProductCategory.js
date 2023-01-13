import React from 'react'
import styled from 'styled-components'

const ProductCategory = ({ category, setValue, value, handleCategory }) => {
  return (
    <Wrapper>
      <ul className='category-holder'>
        {category.map((item, index) => {
          return (
            <li onClick={handleCategory} key={index}>
              <button
                onClick={() => setValue(index)}
                type='button'
                className={value === index ? 'btn active' : 'btn'}
                value={item}
              >
                {item}
              </button>
            </li>
          )
        })}
      </ul>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  position: sticky;
  top: 3.2rem;
  z-index: 1;
  .category-holder {
    padding-right: 15rem;
    background: var(--primary-8);
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    button {
      margin: 0.5rem;
    }
  }
`
export default ProductCategory
