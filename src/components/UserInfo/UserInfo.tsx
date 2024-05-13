import { useState } from 'react';
import { UserModel } from '../../models';
import { parsePhoneNumber } from '../../utils';
import { Button } from '../Button';

interface UserInfoProps {
  user: UserModel;
}

export const UserInfo = ({ user }: UserInfoProps) => {
  const { phoneNumber, extension } = parsePhoneNumber(user?.phone);
  const { address, company } = user;
  
  const [isAddressShown, setIsAddressShown] = useState(false);
  const [isCompanyShown, setIsCompanyShown] = useState(false);
  
  const handleAddressToggle = () => setIsAddressShown(!isAddressShown);
  const handleCompanyToggle = () => setIsCompanyShown(!isCompanyShown);
  return (
    <div className={'flex-column gap-4'}>
      <div className={'card'}>
        <div className={'justify-content-between align-items-center gap-3'}>
          <div className={'txt txt-secondary'}>Name</div>
          <div className={'txt txt-primary'}>{user.name}</div>
        </div>
        <div className={'justify-content-between align-items-center gap-3'}>
          <div className={'txt txt-secondary'}>Username</div>
          <div className={'txt txt-primary'}>{user.username}</div>
          
        </div>
        <div className={'justify-content-between align-items-center gap-3'}>
          <div className={'txt txt-secondary'}>Email</div>
          <div className={'txt txt-primary'}>{user.email}</div>
        </div>
        <div className={'justify-content-between align-items-center gap-3'}>
          <div className={'txt txt-secondary'}>Phone number</div>
          <div className={'align-items-center gap-1'}>
            {extension && <div className={'txt txt-purple'}>{extension}</div>}
            <div className={'txt txt-primary'}>{phoneNumber}</div>
          </div>
        </div>
        <div className={'justify-content-between align-items-center gap-3'}>
          <div className={'txt txt-secondary'}>Address</div>
          <Button disabled={!(Object.keys(user?.address)?.length > 0)} type={'button'} onClick={handleAddressToggle} className={'btn-primary btn-sm'} label={`${isAddressShown ? 'Hide' : 'Show'} address`} />
        </div>
        <div className={'justify-content-between align-items-center gap-3'}>
          <div className={'txt txt-secondary'}>Company</div>
          <Button disabled={!(Object.keys(user?.company)?.length > 0)} type={'button'} onClick={handleCompanyToggle} className={'btn-primary btn-sm'} label={`${isCompanyShown ? 'Hide' : 'Show'} company`} />
        </div>
        <div className={'justify-content-between align-items-center gap-3'}>
          <div className={'txt txt-secondary'}>Website</div>
          <a className={'link'} href={user.website}>{user.website}</a>
        </div>
      </div>
      {isAddressShown &&
        <div className={'card'}>
          <div className={'justify-content-between align-items-center gap-3'}>
            <div className={'txt txt-secondary'}>City</div>
            <div className={'txt txt-primary'}>{address.city}</div>
          </div>
          <div className={'justify-content-between align-items-center gap-3'}>
            <div className={'txt txt-secondary'}>Street</div>
            <div className={'txt txt-primary'}>{address.street}</div>
          </div>
          <div className={'justify-content-between align-items-center gap-3'}>
            <div className={'txt txt-secondary'}>Suite</div>
            <div className={'txt txt-primary'}>{address.suite}</div>
          </div>
          <div className={'justify-content-between align-items-center gap-3'}>
            <div className={'txt txt-secondary'}>Zip-code</div>
            <div className={'txt txt-primary'}>{address.zpcode}</div>
          </div>
        </div>}
      {isCompanyShown &&
        <div className={'card'}>
          <div className={'justify-content-between align-items-center gap-3'}>
            <div className={'txt txt-secondary'}>bs</div>
            <div className={'txt txt-primary'}>{company.bs}</div>
          </div>
          <div className={'justify-content-between align-items-center gap-3'}>
            <div className={'txt txt-secondary'}>catchPhrase</div>
            <div className={'txt txt-primary'}>{company.catchPhrase}</div>
          </div>
          <div className={'justify-content-between align-items-center gap-3'}>
            <div className={'txt txt-secondary'}>name</div>
            <div className={'txt txt-primary'}>{company.name}</div>
          </div>
        </div>}
    </div>
  )
}
