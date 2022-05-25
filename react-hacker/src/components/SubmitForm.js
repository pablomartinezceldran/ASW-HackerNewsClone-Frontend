import { useNavigate } from "react-router-dom";
import { submit } from "../APIcalls";

function SubmitForm() {
  const nav = useNavigate();
  function sub() {
    submit(
      document.getElementById("title").value,
      document.getElementById("url").value,
      document.getElementById("text").value
    ).then((res) => {
      nav("/submissions/" + res.submission_id, { replace: true });
    });
  }
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <table className='formTable'>
              <tbody>
                <tr>
                  <td className='label'>
                    <label htmlFor='title'>Title:</label>
                  </td>
                  <td>
                    <input
                      type='text'
                      id='title'
                      name='title'
                      required
                      className='form-control'
                      placeholder='title'
                      defaultValue=''
                    />
                  </td>
                </tr>
                <tr>
                  <td className='label'>
                    <label htmlFor='url'>URL:</label>
                  </td>
                  <td>
                    <input
                      type='text'
                      id='url'
                      name='url'
                      className='form-control'
                      placeholder='url'
                      defaultValue=''
                    />
                  </td>
                </tr>
                <tr>
                  <td className='label'>
                    <label htmlFor='text'>Text:</label>
                  </td>
                  <td>
                    <textarea
                      type='text'
                      id='text'
                      name='text'
                      className='form-control'
                      placeholder='text'
                      rows='5'
                      cols='50'
                    ></textarea>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <button className='btn btn-secondary btn-sm' onClick={sub}>
                      Submit
                    </button>
                  </td>
                </tr>
                <tr className='bottomSpace'></tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default SubmitForm;
