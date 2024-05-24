import { Service } from "../"
import image from '../../assets/images/serviceImage.png'

export const SectionServices = () => {
  const dataServices = [
    {
      icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 17.3438C9 9.3575 15.7896 3 24 3C32.2104 3 39 9.3575 39 17.3438C39 21.8461 36.5657 27.4164 33.8991 32.2311C31.1925 37.118 28.0755 41.5207 26.4039 43.7781C26.1281 44.1552 25.7674 44.4621 25.351 44.674C24.9325 44.887 24.4696 44.9981 24 44.9981C23.5304 44.9981 23.0675 44.887 22.649 44.674C22.2325 44.4621 21.8718 44.1551 21.596 43.778C19.9245 41.5197 16.8075 37.1153 14.1009 32.2279C11.4344 27.4128 9 21.8429 9 17.3438ZM24 6C17.3042 6 12 11.1531 12 17.3438C12 21.0009 14.0656 25.9717 16.7253 30.7745C19.3377 35.4919 22.3637 39.772 24 41.9833C25.6363 39.773 28.6623 35.4945 31.2747 30.7776C33.9343 25.9756 36 21.0043 36 17.3438C36 11.1531 30.6958 6 24 6Z" fill="#4054B0" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M24 15C22.3431 15 21 16.3431 21 18C21 19.6569 22.3431 21 24 21C25.6569 21 27 19.6569 27 18C27 16.3431 25.6569 15 24 15ZM18 18C18 14.6863 20.6863 12 24 12C27.3137 12 30 14.6863 30 18C30 21.3137 27.3137 24 24 24C20.6863 24 18 21.3137 18 18Z" fill="#4054B0" />
      </svg>
      ,
      paragraph: 'Las mejores ubicaciones en base a tus preferencias. Cada dia ingresamos más inmuebles en más lugares del pais.'
    },
    {
      icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.4672 10.1492C7.74317 10.8625 7.5 11.487 7.5 12C7.5 12.513 7.74317 13.1375 8.4672 13.8508C9.19652 14.5692 10.3288 15.2853 11.849 15.9187C14.8828 17.1828 19.178 18 24 18C28.822 18 33.1172 17.1828 36.151 15.9187C37.6712 15.2853 38.8035 14.5692 39.5328 13.8508C40.2568 13.1375 40.5 12.513 40.5 12C40.5 11.487 40.2568 10.8625 39.5328 10.1492C38.8035 9.43079 37.6712 8.71473 36.151 8.08131C33.1172 6.81722 28.822 6 24 6C19.178 6 14.8828 6.81722 11.849 8.08131C10.3288 8.71473 9.19652 9.43079 8.4672 10.1492ZM10.6952 5.31208C14.176 3.86171 18.8809 3 24 3C29.1191 3 33.824 3.86171 37.3048 5.31208C39.042 6.0359 40.5458 6.93596 41.6381 8.01208C42.7358 9.0934 43.5 10.4419 43.5 12C43.5 13.5581 42.7358 14.9066 41.6381 15.9879C40.5458 17.064 39.042 17.9641 37.3048 18.6879C33.824 20.1383 29.1191 21 24 21C18.8809 21 14.176 20.1383 10.6952 18.6879C8.95799 17.9641 7.45424 17.064 6.36185 15.9879C5.26419 14.9066 4.5 13.5581 4.5 12C4.5 10.4419 5.26419 9.0934 6.36185 8.01208C7.45424 6.93596 8.95799 6.0359 10.6952 5.31208Z" fill="#4054B0" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6 18.5625C6.82843 18.5625 7.5 19.2341 7.5 20.0625C7.5 20.5752 7.74316 21.1996 8.46754 21.913C9.19716 22.6315 10.3298 23.3476 11.8503 23.9811C14.8847 25.2452 19.1799 26.0625 24 26.0625C28.8201 26.0625 33.1153 25.2452 36.1497 23.9811C37.6702 23.3476 38.8028 22.6315 39.5325 21.913C40.2568 21.1996 40.5 20.5752 40.5 20.0625C40.5 19.2341 41.1716 18.5625 42 18.5625C42.8284 18.5625 43.5 19.2341 43.5 20.0625C43.5 21.6207 42.7353 22.9693 41.6375 24.0505C40.5448 25.1265 39.0408 26.0265 37.3034 26.7503C33.8222 28.2007 29.1174 29.0625 24 29.0625C18.8826 29.0625 14.1778 28.2007 10.6966 26.7503C8.95923 26.0265 7.45518 25.1265 6.36254 24.0505C5.26465 22.9693 4.5 21.6207 4.5 20.0625C4.5 19.2341 5.17157 18.5625 6 18.5625Z" fill="#4054B0" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6 26.625C6.82843 26.625 7.5 27.2966 7.5 28.125C7.5 28.6377 7.74316 29.2621 8.46754 29.9755C9.19716 30.694 10.3298 31.4101 11.8503 32.0436C14.8847 33.3077 19.1799 34.125 24 34.125C28.8201 34.125 33.1153 33.3077 36.1497 32.0436C37.6702 31.4101 38.8028 30.694 39.5325 29.9755C40.2568 29.2621 40.5 28.6377 40.5 28.125C40.5 27.2966 41.1716 26.625 42 26.625C42.8284 26.625 43.5 27.2966 43.5 28.125C43.5 29.6832 42.7353 31.0318 41.6375 32.113C40.5448 33.189 39.0408 34.089 37.3034 34.8128C33.8222 36.2632 29.1174 37.125 24 37.125C18.8826 37.125 14.1778 36.2632 10.6966 34.8128C8.95923 34.089 7.45518 33.189 6.36254 32.113C5.26465 31.0318 4.5 29.6832 4.5 28.125C4.5 27.2966 5.17157 26.625 6 26.625Z" fill="#4054B0" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6 10.4287C6.82843 10.4287 7.5 11.1003 7.5 11.9287V36.0712C7.5 36.5688 7.73816 37.1824 8.46243 37.8889C9.19151 38.6001 10.3242 39.3096 11.8456 39.9374C14.8814 41.1902 19.1783 42 24 42C28.8217 42 33.1186 41.1902 36.1544 39.9374C37.6758 39.3096 38.8085 38.6001 39.5376 37.8889C40.2618 37.1824 40.5 36.5688 40.5 36.0712V11.9287C40.5 11.1003 41.1716 10.4287 42 10.4287C42.8284 10.4287 43.5 11.1003 43.5 11.9287V36.0712C43.5 37.6249 42.7303 38.9654 41.6324 40.0365C40.5392 41.1028 39.0352 41.994 37.2988 42.7106C33.8189 44.1466 29.1158 45 24 45C18.8842 45 14.1811 44.1466 10.7012 42.7106C8.96482 41.994 7.46084 41.1028 6.36765 40.0365C5.26966 38.9654 4.5 37.6249 4.5 36.0712V11.9287C4.5 11.1003 5.17157 10.4287 6 10.4287Z" fill="#4054B0" />
      </svg>
      ,
      paragraph: 'Nos acomodamos a tu bolsillo. Miles de inmuebles donde podras pagar por lo que verdaderamente tu quieres.'
    },
    {
      icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 37.5C17.3284 37.5 18 38.1716 18 39V45C18 45.8284 17.3284 46.5 16.5 46.5C15.6716 46.5 15 45.8284 15 45V39C15 38.1716 15.6716 37.5 16.5 37.5Z" fill="#4054B0" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 4.5C7.10217 4.5 6.72064 4.65804 6.43934 4.93934C6.15804 5.22064 6 5.60217 6 6V43.5H27V6C27 5.60218 26.842 5.22064 26.5607 4.93934C26.2794 4.65804 25.8978 4.5 25.5 4.5H7.5ZM7.5 1.5H25.5C26.6935 1.5 27.8381 1.97411 28.682 2.81802C29.5259 3.66193 30 4.80653 30 6V44.625C30 45.1223 29.8025 45.5992 29.4508 45.9508C29.0992 46.3025 28.6223 46.5 28.125 46.5H4.5C3.67157 46.5 3 45.8284 3 45V6C3 4.80653 3.47411 3.66193 4.31802 2.81802C5.16193 1.97411 6.30653 1.5 7.5 1.5Z" fill="#4054B0" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M27.8787 17.3787C28.4413 16.8161 29.2044 16.5 30 16.5H40.5C41.6935 16.5 42.8381 16.9741 43.682 17.818C44.5259 18.6619 45 19.8065 45 21V45C45 45.8284 44.3284 46.5 43.5 46.5H28.5C27.6716 46.5 27 45.8284 27 45V19.5C27 18.7044 27.3161 17.9413 27.8787 17.3787ZM40.5 19.5L30 19.5L30 43.5H42V21C42 20.6022 41.842 20.2206 41.5607 19.9393C41.2794 19.658 40.8978 19.5 40.5 19.5Z" fill="#4054B0" />
        <path d="M9.19452 40.4878C8.88386 40.5285 8.56828 40.4708 8.29206 40.3229C8.01584 40.1751 7.79286 39.9444 7.65441 39.6634C7.51596 39.3823 7.46899 39.0649 7.52009 38.7558C7.57119 38.4467 7.7178 38.1614 7.93934 37.9398C8.16088 37.7183 8.44623 37.5717 8.75534 37.5206C9.06445 37.4695 9.38181 37.5164 9.66286 37.6549C9.94392 37.7934 10.1746 38.0163 10.3224 38.2925C10.4703 38.5688 10.528 38.8843 10.4873 39.195C10.4445 39.5229 10.2945 39.8274 10.0607 40.0612C9.82686 40.2949 9.52237 40.4449 9.19452 40.4878Z" fill="#4054B0" />
        <path d="M9.19452 32.9878C8.88386 33.0285 8.56828 32.9708 8.29206 32.8229C8.01584 32.6751 7.79286 32.4444 7.65441 32.1634C7.51596 31.8823 7.46899 31.5649 7.52009 31.2558C7.57119 30.9467 7.7178 30.6614 7.93934 30.4398C8.16088 30.2183 8.44623 30.0717 8.75534 30.0206C9.06445 29.9695 9.38181 30.0164 9.66286 30.1549C9.94392 30.2934 10.1746 30.5163 10.3224 30.7925C10.4703 31.0688 10.528 31.3843 10.4873 31.695C10.4445 32.0229 10.2945 32.3274 10.0607 32.5612C9.82686 32.7949 9.52237 32.9449 9.19452 32.9878Z" fill="#4054B0" />
        <path d="M9.19452 25.4878C8.88386 25.5285 8.56828 25.4708 8.29206 25.3229C8.01584 25.1751 7.79286 24.9444 7.65441 24.6634C7.51596 24.3823 7.46899 24.0649 7.52009 23.7558C7.57119 23.4467 7.7178 23.1614 7.93934 22.9398C8.16088 22.7183 8.44623 22.5717 8.75534 22.5206C9.06445 22.4695 9.38181 22.5164 9.66286 22.6549C9.94392 22.7933 10.1746 23.0163 10.3224 23.2925C10.4703 23.5688 10.528 23.8843 10.4873 24.195C10.4445 24.5229 10.2945 24.8274 10.0607 25.0611C9.82686 25.2949 9.52237 25.4449 9.19452 25.4878Z" fill="#4054B0" />
        <path d="M9.19452 17.9878C8.88386 18.0285 8.56828 17.9708 8.29206 17.8229C8.01584 17.6751 7.79286 17.4444 7.65441 17.1633C7.51596 16.8823 7.46899 16.5649 7.52009 16.2558C7.57119 15.9467 7.7178 15.6614 7.93934 15.4398C8.16088 15.2183 8.44623 15.0717 8.75534 15.0206C9.06445 14.9695 9.38181 15.0164 9.66286 15.1549C9.94392 15.2933 10.1746 15.5163 10.3224 15.7925C10.4703 16.0688 10.528 16.3844 10.4873 16.695C10.4445 17.0229 10.2945 17.3274 10.0607 17.5611C9.82686 17.7949 9.52237 17.9449 9.19452 17.9878Z" fill="#4054B0" />
        <path d="M9.19452 10.4878C8.88386 10.5285 8.56828 10.4708 8.29206 10.3229C8.01584 10.1751 7.79286 9.9444 7.65441 9.66335C7.51596 9.38229 7.46899 9.06494 7.52009 8.75583C7.57119 8.44672 7.7178 8.16137 7.93934 7.93983C8.16088 7.71829 8.44623 7.57168 8.75534 7.52058C9.06445 7.46947 9.38181 7.51645 9.66286 7.6549C9.94392 7.79335 10.1746 8.01633 10.3224 8.29255C10.4703 8.56877 10.528 8.88435 10.4873 9.19501C10.4445 9.52286 10.2945 9.82735 10.0607 10.0612C9.82686 10.2949 9.52237 10.4449 9.19452 10.4878Z" fill="#4054B0" />
        <path d="M16.6945 32.9878C16.3839 33.0285 16.0683 32.9708 15.7921 32.8229C15.5158 32.6751 15.2929 32.4444 15.1544 32.1634C15.016 31.8823 14.969 31.5649 15.0201 31.2558C15.0712 30.9467 15.2178 30.6614 15.4393 30.4398C15.6609 30.2183 15.9462 30.0717 16.2553 30.0206C16.5645 29.9695 16.8818 30.0164 17.1629 30.1549C17.4439 30.2934 17.6746 30.5163 17.8224 30.7925C17.9703 31.0688 18.028 31.3843 17.9873 31.695C17.9445 32.0229 17.7945 32.3274 17.5607 32.5612C17.3269 32.7949 17.0224 32.9449 16.6945 32.9878Z" fill="#4054B0" />
        <path d="M16.6945 25.4878C16.3839 25.5285 16.0683 25.4708 15.7921 25.3229C15.5158 25.1751 15.2929 24.9444 15.1544 24.6634C15.016 24.3823 14.969 24.0649 15.0201 23.7558C15.0712 23.4467 15.2178 23.1614 15.4393 22.9398C15.6609 22.7183 15.9462 22.5717 16.2553 22.5206C16.5645 22.4695 16.8818 22.5164 17.1629 22.6549C17.4439 22.7933 17.6746 23.0163 17.8224 23.2925C17.9703 23.5688 18.028 23.8843 17.9873 24.195C17.9445 24.5229 17.7945 24.8274 17.5607 25.0611C17.3269 25.2949 17.0224 25.4449 16.6945 25.4878Z" fill="#4054B0" />
        <path d="M16.6945 17.9878C16.3839 18.0285 16.0683 17.9708 15.7921 17.8229C15.5158 17.6751 15.2929 17.4444 15.1544 17.1633C15.016 16.8823 14.969 16.5649 15.0201 16.2558C15.0712 15.9467 15.2178 15.6614 15.4393 15.4398C15.6609 15.2183 15.9462 15.0717 16.2553 15.0206C16.5645 14.9695 16.8818 15.0164 17.1629 15.1549C17.4439 15.2933 17.6746 15.5163 17.8224 15.7925C17.9703 16.0688 18.028 16.3844 17.9873 16.695C17.9445 17.0229 17.7945 17.3274 17.5607 17.5611C17.3269 17.7949 17.0224 17.9449 16.6945 17.9878Z" fill="#4054B0" />
        <path d="M16.6945 10.4878C16.3839 10.5285 16.0683 10.4708 15.7921 10.3229C15.5158 10.1751 15.2929 9.9444 15.1544 9.66335C15.016 9.38229 14.969 9.06494 15.0201 8.75583C15.0712 8.44672 15.2178 8.16137 15.4393 7.93983C15.6609 7.71829 15.9462 7.57168 16.2553 7.52058C16.5645 7.46947 16.8818 7.51645 17.1629 7.6549C17.4439 7.79335 17.6746 8.01633 17.8224 8.29255C17.9703 8.56877 18.028 8.88435 17.9873 9.19501C17.9445 9.52286 17.7945 9.82735 17.5607 10.0612C17.3269 10.2949 17.0224 10.4449 16.6945 10.4878Z" fill="#4054B0" />
        <path d="M24.1945 40.4878C23.8839 40.5285 23.5683 40.4708 23.2921 40.3229C23.0158 40.1751 22.7929 39.9444 22.6544 39.6634C22.516 39.3823 22.469 39.0649 22.5201 38.7558C22.5712 38.4467 22.7178 38.1614 22.9393 37.9398C23.1609 37.7183 23.4462 37.5717 23.7553 37.5206C24.0645 37.4695 24.3818 37.5164 24.6629 37.6549C24.9439 37.7934 25.1746 38.0163 25.3224 38.2925C25.4703 38.5688 25.528 38.8843 25.4873 39.195C25.4445 39.5229 25.2945 39.8274 25.0607 40.0612C24.8269 40.2949 24.5224 40.4449 24.1945 40.4878Z" fill="#4054B0" />
        <path d="M24.1945 32.9878C23.8839 33.0285 23.5683 32.9708 23.2921 32.8229C23.0158 32.6751 22.7929 32.4444 22.6544 32.1634C22.516 31.8823 22.469 31.5649 22.5201 31.2558C22.5712 30.9467 22.7178 30.6614 22.9393 30.4398C23.1609 30.2183 23.4462 30.0717 23.7553 30.0206C24.0645 29.9695 24.3818 30.0164 24.6629 30.1549C24.9439 30.2934 25.1746 30.5163 25.3224 30.7925C25.4703 31.0688 25.528 31.3843 25.4873 31.695C25.4445 32.0229 25.2945 32.3274 25.0607 32.5612C24.8269 32.7949 24.5224 32.9449 24.1945 32.9878Z" fill="#4054B0" />
        <path d="M24.1945 25.4878C23.8839 25.5285 23.5683 25.4708 23.2921 25.3229C23.0158 25.1751 22.7929 24.9444 22.6544 24.6634C22.516 24.3823 22.469 24.0649 22.5201 23.7558C22.5712 23.4467 22.7178 23.1614 22.9393 22.9398C23.1609 22.7183 23.4462 22.5717 23.7553 22.5206C24.0645 22.4695 24.3818 22.5164 24.6629 22.6549C24.9439 22.7933 25.1746 23.0163 25.3224 23.2925C25.4703 23.5688 25.528 23.8843 25.4873 24.195C25.4445 24.5229 25.2945 24.8274 25.0607 25.0611C24.8269 25.2949 24.5224 25.4449 24.1945 25.4878Z" fill="#4054B0" />
        <path d="M25.0635 17.5618C25.6475 16.9779 25.6451 16.0287 25.0582 15.4419C24.4713 14.855 23.5222 14.8526 22.9382 15.4366C22.3542 16.0205 22.3566 16.9697 22.9435 17.5565C23.5304 18.1434 24.4795 18.1458 25.0635 17.5618Z" fill="#4054B0" />
        <path d="M24.1945 10.4878C23.8839 10.5285 23.5683 10.4708 23.2921 10.3229C23.0158 10.1751 22.7929 9.9444 22.6544 9.66335C22.516 9.38229 22.469 9.06494 22.5201 8.75583C22.5712 8.44672 22.7178 8.16137 22.9393 7.93983C23.1609 7.71829 23.4462 7.57168 23.7553 7.52058C24.0645 7.46947 24.3818 7.51645 24.6629 7.6549C24.9439 7.79335 25.1746 8.01633 25.3224 8.29255C25.4703 8.56877 25.528 8.88435 25.4873 9.19501C25.4445 9.52286 25.2945 9.82735 25.0607 10.0612C24.8269 10.2949 24.5224 10.4449 24.1945 10.4878Z" fill="#4054B0" />
        <path d="M37.5 37.5C37.2033 37.5 36.9133 37.588 36.6666 37.7528C36.42 37.9176 36.2277 38.1519 36.1142 38.426C36.0006 38.7001 35.9709 39.0017 36.0288 39.2926C36.0867 39.5836 36.2296 39.8509 36.4393 40.0607C36.6491 40.2704 36.9164 40.4133 37.2074 40.4712C37.4983 40.5291 37.7999 40.4994 38.074 40.3858C38.3481 40.2723 38.5824 40.08 38.7472 39.8334C38.912 39.5867 39 39.2967 39 39C39 38.6022 38.842 38.2206 38.5607 37.9393C38.2794 37.658 37.8978 37.5 37.5 37.5Z" fill="#4054B0" />
        <path d="M37.5 30C37.2033 30 36.9133 30.088 36.6666 30.2528C36.42 30.4176 36.2277 30.6519 36.1142 30.926C36.0006 31.2001 35.9709 31.5017 36.0288 31.7926C36.0867 32.0836 36.2296 32.3509 36.4393 32.5607C36.6491 32.7704 36.9164 32.9133 37.2074 32.9712C37.4983 33.0291 37.7999 32.9994 38.074 32.8858C38.3481 32.7723 38.5824 32.58 38.7472 32.3334C38.912 32.0867 39 31.7967 39 31.5C39 31.1022 38.842 30.7206 38.5607 30.4393C38.2794 30.158 37.8978 30 37.5 30Z" fill="#4054B0" />
        <path d="M37.5 22.5C37.2033 22.5 36.9133 22.588 36.6666 22.7528C36.42 22.9176 36.2277 23.1519 36.1142 23.426C36.0006 23.7001 35.9709 24.0017 36.0288 24.2926C36.0867 24.5836 36.2296 24.8509 36.4393 25.0607C36.6491 25.2704 36.9164 25.4133 37.2074 25.4712C37.4983 25.5291 37.7999 25.4994 38.074 25.3858C38.3481 25.2723 38.5824 25.08 38.7472 24.8334C38.912 24.5867 39 24.2967 39 24C39 23.6022 38.842 23.2206 38.5607 22.9393C38.2794 22.658 37.8978 22.5 37.5 22.5Z" fill="#4054B0" />
        <path d="M31.5 37.5C31.2033 37.5 30.9133 37.588 30.6666 37.7528C30.42 37.9176 30.2277 38.1519 30.1142 38.426C30.0006 38.7001 29.9709 39.0017 30.0288 39.2926C30.0867 39.5836 30.2296 39.8509 30.4393 40.0607C30.6491 40.2704 30.9164 40.4133 31.2074 40.4712C31.4983 40.5291 31.7999 40.4994 32.074 40.3858C32.3481 40.2723 32.5824 40.08 32.7472 39.8334C32.912 39.5867 33 39.2967 33 39C33 38.6022 32.842 38.2206 32.5607 37.9393C32.2794 37.658 31.8978 37.5 31.5 37.5Z" fill="#4054B0" />
        <path d="M31.5 30C31.2033 30 30.9133 30.088 30.6666 30.2528C30.42 30.4176 30.2277 30.6519 30.1142 30.926C30.0006 31.2001 29.9709 31.5017 30.0288 31.7926C30.0867 32.0836 30.2296 32.3509 30.4393 32.5607C30.6491 32.7704 30.9164 32.9133 31.2074 32.9712C31.4983 33.0291 31.7999 32.9994 32.074 32.8858C32.3481 32.7723 32.5824 32.58 32.7472 32.3334C32.912 32.0867 33 31.7967 33 31.5C33 31.1022 32.842 30.7206 32.5607 30.4393C32.2794 30.158 31.8978 30 31.5 30Z" fill="#4054B0" />
        <path d="M31.5 22.5C31.2033 22.5 30.9133 22.588 30.6666 22.7528C30.42 22.9176 30.2277 23.1519 30.1142 23.426C30.0006 23.7001 29.9709 24.0017 30.0288 24.2926C30.0867 24.5836 30.2296 24.8509 30.4393 25.0607C30.6491 25.2704 30.9164 25.4133 31.2074 25.4712C31.4983 25.5291 31.7999 25.4994 32.074 25.3858C32.3481 25.2723 32.5824 25.08 32.7472 24.8334C32.912 24.5867 33 24.2967 33 24C33 23.6022 32.842 23.2206 32.5607 22.9393C32.2794 22.658 31.8978 22.5 31.5 22.5Z" fill="#4054B0" />
      </svg>
      ,
      paragraph: 'Contamos con departamentos, casas, PH, cabañas y más. Todo lo que necesitas para que sea tu hogar.'
    },
    {
      icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.50104 16.5606C4.55952 10.8568 9.09075 6 14.9147 6C18.4895 6 21.119 7.76949 22.797 9.43555C23.2643 9.89944 23.6652 10.3622 24.001 10.7888C24.3367 10.3622 24.7377 9.89944 25.2049 9.43555C26.8829 7.76949 29.5124 6 33.0872 6C38.9112 6 43.4424 10.8568 43.5009 16.5606L43.5009 16.561C43.6118 27.6855 34.6732 35.3816 25.6885 41.4805C25.1908 41.8191 24.6029 42.0001 24.001 42.0001C23.3991 42.0001 22.8111 41.8191 22.3135 41.4805C13.3278 35.3817 4.38911 27.6855 4.50104 16.5608L4.50104 16.5606ZM25.3408 14.1745C25.086 14.6805 24.5677 15 24.001 15C23.4342 15 22.916 14.6806 22.6612 14.1746C22.6609 14.174 22.6603 14.1728 22.6594 14.171C22.6575 14.1674 22.6545 14.1616 22.6503 14.1536C22.648 14.1493 22.6454 14.1445 22.6425 14.139C22.6257 14.1074 22.5976 14.0559 22.5584 13.9874C22.4798 13.8502 22.3571 13.6458 22.1904 13.3966C21.8554 12.8959 21.3519 12.2283 20.6833 11.5645C19.3398 10.2305 17.4262 9 14.9147 9C10.8463 9 7.54381 12.4193 7.50089 16.591M25.3408 14.1745C25.3411 14.1739 25.3417 14.1727 25.3426 14.171C25.3454 14.1656 25.351 14.1548 25.3594 14.139C25.3763 14.1074 25.4043 14.0559 25.4435 13.9874C25.5221 13.8502 25.6448 13.6458 25.8115 13.3966C26.1465 12.8959 26.65 12.2283 27.3186 11.5645C28.6621 10.2305 30.5757 9 33.0872 9C37.1556 9 40.458 12.4193 40.501 16.5909C40.5945 25.9652 33.0659 32.847 24.0023 38.9992L24.001 39.0001L23.9996 38.9992C14.9352 32.847 7.40673 25.9654 7.50089 16.5913" fill="#4054B0" />
      </svg>
      ,
      paragraph: 'Buscamos el hogar de tus sueños en base a las preferencias de los clientes. La seguridad y la confianza nos lo es todo.'
    },
  ]
  return (
    <section className='flex flex-wrap xl:flex-nowrap  justify-center align-middle gap-20 max-w-[1440px] p-4 xl:p-20 m-auto'>

      <section className='m-auto'>

        <img className='rounded-3xl border border-[#DDE1E6] overflow-hidden shadow-[0px_4px_4px_rgba(0,0,0,0.25)]' src={image} alt='image section' />

      </section>

      <section className='flex flex-wrap justify-between gap-6 xl:gap-16 max-w-[650px] '>
        {
          dataServices.map(dataService => (
            <Service key={dataService.paragraph} dataService={dataService} />
          ))
        }
      </section>

    </section>
  )
}