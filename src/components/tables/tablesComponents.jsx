import ReactStars from "react-rating-stars-component"
import { Link } from "react-router-dom"
import { LazyImage } from "../helpers/globalComponents"
import { EditIcon, EyeIcon, TrashIcon } from "../layouts/AllImages"
import { Box, SpanStyled } from "../ui/Elements"
import { useDispatch } from "react-redux"
import Swal from "sweetalert2"
export const ActionButtons = ({ type, onView, options, index, deleteApi }) => {
    const dispatch = useDispatch();
    const deleteAction = () => {
        Swal.fire({
            text: 'Are you sure want to delete?',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            showLoaderOnConfirm: true,
            confirmButtonColor: 'var(--themeColor)',
            icon: 'warning',
            preConfirm: () => {
              return dispatch(deleteApi({ id: index }))
                .then(response => {
                  return response?.payload
                })
                .catch(error => {
                  Swal.showValidationMessage(
                    `Request failed: ${error}`
                  )
                })
            },
            allowOutsideClick: () => !Swal.isLoading()
          }).then((result) => {
            if (result.isConfirmed) {
                console.log(result)
              Swal.fire({
                text: result?.value?.message,
                icon: 'success'
              })
            }
        })
    }
    return (
        <ul className='d-flex list-unstyled d-flex align-items-center mb-0'>
            {options && options.includes('view') && (
            <li>
                <Link to={type?`/${type}/${index}`:'#'} {...(onView && { onClick: onView })} type='button' className='border-0 bg-transparent text-decoration-none'>
                    <EyeIcon />
                </Link>
            </li>
            )}
            {options && options.includes('delete') && (
                <li>
                    <button type='button' onClick={deleteAction} className='border-0 bg-transparent'>
                        <TrashIcon />
                    </button>
                </li>
            )}

            {options && options.includes('edit') && (
                <li>
                    <button type='button' className='border-0 bg-transparent'>
                        <EditIcon />
                    </button>
                </li>
            )}
        </ul>    
    )
}

export const Ratings = (props) => (
    <Box className='d-flex align-items-center'>
        <ReactStars
            char='🟊'
            edit={false}
            {...props}
        />
        
        {props.text?
            <span className='ms-2'>({props.text})</span>
        :null}
    </Box>
)

export const UserAvatar = ({text,url}) => (
    <Box className='d-flex align-items-center'>
        <LazyImage src={url} width="30px" height="30px" className="rounded-circle" />
        <SpanStyled weight="700" size="12px" className='ms-2'>{text}</SpanStyled>
    </Box>
)