
import { useNavigate } from "react-router-dom";

const SubMenu = ({ item, handleMenuClick, idx, displayedOptions }) => {
    const navigate = useNavigate();
    const filterType = (child)=>{
        if (!child.param) {
            return;
        }
        navigate(`/?filter=${child.param}`);
    }
    return (
        <div className="types-link" key={item.label}>
            <div
                className="menu-item"
                style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                onClick={() => handleMenuClick(idx)}
            >
                <span style={{
                    marginRight: '8px',
                    transform: displayedOptions === idx ? 'rotate(90deg)' : 'none',
                    transition: 'transform 0.2s'
                }}>
                    {item.icon}
                </span>
                <span className="text nav-text">{item.label}</span>
            </div>
            {displayedOptions === idx && (
                <div className="submenu" style={{ marginLeft: '24px' }}>
                    {item.children.map((child) => (
                        <div className="submenu-item" key={child.param} style={{ cursor: 'pointer',padding: '4px 0' }} onClick={()=> filterType(child)}>
                            {child.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SubMenu